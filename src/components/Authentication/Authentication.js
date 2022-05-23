import React from 'react'
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth"; 
import { useState, useEffect } from 'react';
import { signOut } from "firebase/compat/auth"; 
import "../Authentication/Authentication.css"

const Authentication = () => {

    const [User, setUser] = useState([]);    
    
    
    const loginWithGoogle = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then((re) => {                 
            console.log(re.user.displayName);
            setUser(re.user.displayName); 
                                
            })            
        .catch((err) => {
            console.log(err);
            })             
        };

   const userSignOut = () => {        
            firebase.auth().signOut()       
            setUser([]);      
            console.log(User)
            
   }   
    
    

    return (
        <div>                      
                {
                    User === null  ?
                    <button className="btnSignIn" onClick={loginWithGoogle}>Sign in</button>  :   
                    <button className="btnSignOut" onClick={userSignOut}>Sign out</button> 
                }
                
        </div>
    )
}

export default Authentication
