import React, { useState, useEffect } from "react"
import { Link, Navigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, User, signInWithPopup, onAuthStateChanged,} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId:  process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



export const Login: React.FC = () => {
  const [user, setUser] = useState<User|null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  }, [])
   const SignIn = () => {
    signInWithPopup(auth, provider)
    .then((result) => {

    })
     .catch((err) => console.error(err));
   }

  if(user) {
    return <Navigate to={`/app`} />;
  }

  return (
    <div>
      <Link to="/app">App</Link>
      <h1>
        Login
      </h1>
      <p>
      <button onClick={() => SignIn()} >
        LOGIN
      </button>
      </p>
    </div>
  );
};