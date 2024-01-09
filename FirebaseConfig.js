// Import the functions you need from the SDKs you need
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence
} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMfqK1rEmQWTQE0GMP7UktzpRzrSxokOc",
  authDomain: "startup-crafter-iic.firebaseapp.com",
  projectId: "startup-crafter-iic",
  storageBucket: "startup-crafter-iic.appspot.com",
  messagingSenderId: "890254421808",
  appId: "1:890254421808:web:ef2fb8b96f5da59c7b62f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize auth
const FIREBASE_AUTH = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { FIREBASE_AUTH };