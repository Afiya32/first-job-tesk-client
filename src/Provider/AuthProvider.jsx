/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../assets/firebase/firebase.config";







export const AuthContext = createContext(null);





const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
    const [ user, setUser] = useState({})
    const [ loader, setLoader] =useState(true);
  // Google login
  const googleLogIn = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  };
  // create a new user
  const createUser =(email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  //profile update
  const handleUpdateProfile =  (name,photo)=>{
    return updateProfile(auth.currentUser,{
      displayName:name,photoURL:photo
    })
  } 





  // log in user
  const login =(email,password)=>{
    setLoader(true)
     return signInWithEmailAndPassword(auth,email,password);
  }
// logout user
const logout = ()=>{
  setLoader(true)
  return signOut(auth);
}

  // onauth state change
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
    setUser(user)
    // if(user){

    // }else{}
    setLoader(false)
    });
  },[])
  console.log(user)

  const info = { googleLogIn ,createUser ,login,user,logout,loader,handleUpdateProfile };

  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;