import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
const firebaseConfig = {
    apiKey: 'AIzaSyAQklrWOY0zQYzGT7p71ThljHl_JUjDw1A',
    authDomain: "hip-gecko-311505.firebaseapp.com",
    projectId: "hip-gecko-311505",
    storageBucket: "hip-gecko-311505.appspot.com",
    messagingSenderId: "17422836348",
    appId: "1:17422836348:web:25d2fbcb86bbaddb759ff9",
    measurementId: "G-YKPBJ9XBLH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };