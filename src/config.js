// import firebase from 'firebase'
import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCgsP5SQv_5u_6R_Awq8pQ3asSs7JQ9m4M",
    authDomain: "fir-9b000.firebaseapp.com",
    projectId: "fir-9b000",
    storageBucket: "fir-9b000.appspot.com",
    messagingSenderId: "799239798263",
    appId: "1:799239798263:web:42f481259f3c1c6e7dc2f2",
    measurementId: "G-EL7ZV0LGMH"
  };

  const app = initializeApp(firebaseConfig);
  export default app;

//   const app = initializeApp(firebaseConfig);
//   export {app}
//    const db = getFirestore(app);
//    export {db}

// export const Firebase = firebase.initializeApp(firebaseConfig)