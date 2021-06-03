import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import initFirebase from '../../../libs/firebase';
import 'firebase/auth';

initFirebase();

type AuthConfig = {
  signInSuccessUrl: string;
};

const firebaseAuthConfig = ({ signInSuccessUrl }: AuthConfig) => ({
  signInFlow: 'popup',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  signInSuccessUrl,
  credentialHelper: 'none',
});

const FirebaseAuth = () => {
  const signInSuccessUrl = '/dashboard';

  return (
    <div>
      <StyledFirebaseAuth
        uiConfig={firebaseAuthConfig({ signInSuccessUrl })}
        firebaseAuth={firebase.auth()}
      />
    </div>
  );
};

export default FirebaseAuth;
