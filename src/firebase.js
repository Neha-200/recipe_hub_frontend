import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyD8Rf3eqMpO_DalNL6ka7kskV3Ox8hrTZA",
  authDomain: "kitchen-secrets-2029f.firebaseapp.com",
  projectId: "kitchen-secrets-2029f",
  storageBucket: "kitchen-secrets-2029f.appspot.com",
  messagingSenderId: "85263805029",
  appId: "1:85263805029:web:d1459f166ef0d80b8c748c"
};


export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);