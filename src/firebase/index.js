import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBRGgiGxIkfHKTxIaA285A_rB-JDW0LWfY",  
    authDomain: "carabettareactjs16940.firebaseapp.com",  
    projectId: "carabettareactjs16940",  
    storageBucket: "carabettareactjs16940.appspot.com",  
    messagingSenderId: "561131477339",  
    appId: "1:561131477339:web:71fb6b1e5d0343ce46a27e"  
  };
  // !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const app = firebase.initializeApp(firebaseConfig);

  export const getFirebase = () => app;
  export const getFirestore = () => firebase.firestore(app);

//   export const loginWithGoogle = () => {
//     const googleProvider = new firebase.auth.GoogleAuthProvider()
//     return firebase.auth().signInWithPopup(googleProvider)
// }
  
  
  