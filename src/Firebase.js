// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCmeHS4_1B-SHbO7k51-LGljGlPH3i_Igs',
  authDomain: 'realtor-clone-react-5b8f2.firebaseapp.com',
  projectId: 'realtor-clone-react-5b8f2',
  storageBucket: 'realtor-clone-react-5b8f2.appspot.com',
  messagingSenderId: '639691124079',
  appId: '1:639691124079:web:1bf794b4d5d8a79618cc9a',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db=getFirestore()
