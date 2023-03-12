import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react"
import app from "../firebase.init";
import { useEffect } from "react";
import { Navigate, useLocation, } from "react-router-dom";

const auth = getAuth(app);


const useFirebase=()=>{
    const [user, setUser] = useState({});

    const signInWithGoogle = ()=>{
        
        const googleProvider = new GoogleAuthProvider();
        
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user)
            console.log(user);
            
        })
    }

    const handleSignOut = ()=>{
        signOut(auth)
        .then(()=>{})
    };
    
    useEffect( ()=>{
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    },[]);

    return {
        user,
        signInWithGoogle,
        handleSignOut
    }
}

export default useFirebase;