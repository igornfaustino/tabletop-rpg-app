import React, { useEffect, useState } from "react";
import router from "next/router";
import firebase from "firebase/app";
import "firebase/auth";
import initFirebase from "../../../libs/firebase";
import FirebaseAuth from "./FirebaseAuth";

initFirebase();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const withAuth = (Component: React.FC) => (props: any) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        auth.signInWithRedirect(provider);
      } else {
        setIsReady(true);
      }
    });
  }, []);

  if (!isReady) return <React.Fragment />;

  return (
    <div>
      <Component {...props} />
    </div>
  );
};

export default withAuth;
