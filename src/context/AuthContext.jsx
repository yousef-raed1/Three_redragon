import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userDataState, setUserDataState] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoadingCurrentUser, setIsLoadingCurrentUser] = useState(false);

  const registerHandler = async (data) => {
    try {
      setIsLoading(true);

      const { email, password, firstname, lastname, phone } = data;

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const id = userCredential.user.uid;

      await setDoc(doc(db, "users", id), {
        id,
        firstname,
        lastname,
        email,
        phone,
        password,
        createdAt: new Date(),
      });

      setUserDataState(userCredential.user);

      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const loginHandler = async (data) => {
    setIsLoading(true);

    try {
      const { email, password } = data;

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUserDataState(userCredential.user);

      return { success: true };
    } catch (error) {
      return { success: false, message: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUserData = async (id) => {
    const userRef = await getDoc(doc(db, "users", id));
    if (userRef.exists()) {
      setCurrentUser(userRef.data());
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserDataState(user);
        await fetchUserData(user.uid);
      } else {
        setUserDataState(null);
        setCurrentUser(null);
      }

      setIsLoadingCurrentUser(false);
    });

    return () => unsubscribe();
  }, []);

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        registerHandler,
        loginHandler,
        isLoading,
        userDataState,
        currentUser,
        isLoadingCurrentUser,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};