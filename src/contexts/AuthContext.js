import { createContext, useContext, useState, useEffect } from "react";
import { auth,db} from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { setDoc,doc } from "firebase/firestore";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // SignUp
  const signUp = (email, password) => {

   return createUserWithEmailAndPassword(auth, email, password);
   
      
  };

  const register = (email)=>{

   return setDoc(doc(db, 'users', email),{

      savedShows: []
      
    })
  }

  //    SignIn
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user,register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
