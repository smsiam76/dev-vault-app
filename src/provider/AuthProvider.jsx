
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import AuthContext from "./AuthContext";
import auth from "../firebase/firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [actionloading, setActionLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        setActionLoading(true);
        const result =  createUserWithEmailAndPassword(auth, email, password);
        setActionLoading(false);
        return result;
    }

    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    }

    const signUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [])
  const userInfo = {
    createUser,
    updateUser,
    signUser,
    logOut,
    user,
    loading,
    actionloading,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};
export default AuthProvider;
