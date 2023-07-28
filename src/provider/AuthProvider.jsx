import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext()
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider;

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);


    // Create User
    const handleCreateUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }



    // Login User
    const handleLoginUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    // Google Login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // Logout User
    const handleLogout = () => {
        setLoader(true);
        return signOut(auth);
    }


    // On Auth State Change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoader(false)
        })
        return () => {
            return unsubscribe;
        }
    }, [])






    const authInfo = {
        user,
        loader,
        handleCreateUser,
        handleLoginUser,
        handleLogout,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;