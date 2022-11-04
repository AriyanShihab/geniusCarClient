import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/ferbase.init";

export const AuthContext = createContext();

const UserContext = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const auth = getAuth(app);
  const signUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      return () => {
        return unsubscribe();
      };
    });
  }, []);
  const methods = {
    user,
    loading,
    setLoading,
    signUpWithEmail,
    login,
  };
  return (
    <AuthContext.Provider value={methods}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
