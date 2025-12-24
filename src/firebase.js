import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDZSWqBpY9gT0no3RnOG9wl1w5WciMS1_0",
    authDomain: "filmtour-bc5ca.firebaseapp.com",
    projectId: "filmtour-bc5ca",
    storageBucket: "filmtour-bc5ca.firebasestorage.app",
    messagingSenderId: "55723333712",
    appId: "1:55723333712:web:ca9b0bf4638ca8ecb99955",
    measurementId: "G-XCX28G5QPY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
