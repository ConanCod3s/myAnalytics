// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyBjxRRCXnl6tVwcOTLNlTLM7mORHxhnKVA",
    authDomain: "my-analytics-5d651.firebaseapp.com",
    projectId: "my-analytics-5d651",
    storageBucket: "my-analytics-5d651.appspot.com",
    messagingSenderId: "93775090162",
    appId: "1:93775090162:web:c139b4bdb757a85bb2db6b",
    measurementId: "G-TWJLZHDZST"
};
// Initialize Firebase


export const AppInit = initializeApp(firebaseConfig);
export const AppAnalystics = getAnalytics(AppInit);
export const AppAuth = getAuth(AppInit);
