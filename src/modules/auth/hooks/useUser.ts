import { useEffect, useState } from 'react';

import firebase from 'firebase/app';
import { useRouter } from 'next/dist/client/router';
import 'firebase/auth';

import initFirebase from '../../../libs/firebase';
import { UserType } from '../types/UserType';
import { getUserFromCookie, removeUserCookie, setUserCookie } from '../userCookie';

initFirebase();

export const mapUserData = async (user: firebase.User): Promise<UserType> => {
  const { uid, email, displayName } = user;
  const token = await user.getIdToken(true);
  return {
    id: uid,
    email,
    token,
    displayName,
  };
};

const useUser = () => {
  const [user, setUser] = useState<UserType>();
  const router = useRouter();

  const logout = async () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        router.push('/');
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    const cancelAuthListener = firebase.auth().onIdTokenChanged(async (userToken) => {
      if (userToken) {
        const userData = await mapUserData(userToken);
        setUserCookie(userData);
        setUser(userData);
      } else {
        removeUserCookie();
        setUser(undefined);
      }
    });

    const userFromCookie = getUserFromCookie();
    if (userFromCookie) {
      setUser(userFromCookie);
    }
    return cancelAuthListener;
  }, []);

  return { user, logout };
};

export default useUser;
