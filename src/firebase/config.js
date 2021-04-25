import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.Firebase_AUTH_DOMAIN,
    projectId: process.env.Firebase_PROJECT_ID,
    storageBucket: process.env.Firebase_STORAGE_BUCKET,
    messagingSenderId: process.env.Firebase_MESSAGING_SENDER_ID,
    appId: process.env.Fireabse_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };