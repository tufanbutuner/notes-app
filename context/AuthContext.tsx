import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../server";

const AuthContext = createContext<any>({});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);

  const login = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const register = async (email, password) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      router.push("/");
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser?: any) => {
      setCurrentUser(currentUser);
    });
    return unsub;
  }, []);

  const value = {
    currentUser,
    setCurrentUser,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
