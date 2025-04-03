// contexts/AuthContext.js
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../lib/firebase";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined" && auth) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          });
        } else {
          setUser(null);
        }
        setLoading(false);
      });

      return () => unsubscribe();
    }
  }, []);

  const signInWithGoogle = async () => {
    if (!auth) return false;

    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      return true;
    } catch (error) {
      console.error("Error signing in with Google", error);
      return false;
    }
  };

  const signup = async (email, password) => {
    if (!auth) return false;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      console.error("Error signing up with email/password", error);
      return false;
    }
  };

  const login = async (email, password) => {
    if (!auth) return false;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      return true;
    } catch (error) {
      console.error("Error logging in with email/password", error);
      return false;
    }
  };

  const logout = async () => {
    if (!auth) return false;

    try {
      await signOut(auth);
      return true;
    } catch (error) {
      console.error("Error signing out", error);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, signInWithGoogle, signup, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
