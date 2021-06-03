import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvnXPCCbti_vAtp3DP50qqljKUxCaBjUw",
  authDomain: "tabletop-rpg-app.firebaseapp.com",
  projectId: "tabletop-rpg-app",
  storageBucket: "tabletop-rpg-app.appspot.com",
  messagingSenderId: "1075092555819",
  appId: "1:1075092555819:web:113b1b6a8feb71cf2fc26e",
  measurementId: "G-PMWK9W8T4H",
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}
