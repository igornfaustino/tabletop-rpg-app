import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import "firebase/auth";
import initFirebase from "../../../libs/firebase";
import styled from "styled-components";

initFirebase();

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const firebaseAuthConfig = () => ({
  signInFlow: "redirect",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  credentialHelper: "none",
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
});

const FirebaseAuth = () => {
  return (
    <Wrapper>
      <StyledFirebaseAuth
        uiConfig={firebaseAuthConfig()}
        firebaseAuth={firebase.auth()}
      />
    </Wrapper>
  );
};

export default FirebaseAuth;
