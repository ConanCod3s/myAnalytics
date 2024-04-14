import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBjxRRCXnl6tVwcOTLNlTLM7mORHxhnKVA",
  authDomain: "my-analytics-5d651.firebaseapp.com",
  projectId: "my-analytics-5d651",
  storageBucket: "my-analytics-5d651.appspot.com",
  messagingSenderId: "93775090162",
  appId: "1:93775090162:web:c139b4bdb757a85bb2db6b",
  measurementId: "G-99ZN5PXGBF",
};

// Initialize Firebase

export const AppInit = initializeApp(firebaseConfig);
// export const AppAnalytics = getAnalytics(AppInit);
export const AppAuth = getAuth(AppInit);
