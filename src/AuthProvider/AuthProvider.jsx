import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";


const GoogleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUserWithEmail = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginwithEmail = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const loginwithGoogle = () =>{
        setLoading(true);
        signInWithPopup(auth, GoogleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
             setUser(loggedUser); 
             setLoading(false);     
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    //console.log(user)


    const logOut = () =>{
        signOut(auth)
        .then()
        .catch()
    }
    const updateUserData = (user,name,url)=>{
        updateProfile(user,{
            displayName: name,
            photoURL: url,
        })
        .then(()=>{
            console.log('user name and url updated')
        })
        .catch(err=>{
            console.log(err)
        })
}
    const AuthInfo = {
        user,
        createUserWithEmail,
        updateUserData,
        loginwithEmail,
        loginwithGoogle,
        logOut,
        loading
        
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;