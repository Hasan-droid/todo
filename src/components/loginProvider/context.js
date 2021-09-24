import React, { useEffect, useState } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

const testUsers = {
  admin: {password:'password', name:'Administrator', role:'admin', capabilities:['create','read','update','delete','rend']},
  editor: { password: 'password', name: 'Editor', role: 'editor', capabilities: ['read', 'update']},
  writer: { password: 'password', name: 'Writer', role: 'writer', capabilities: ['create','read']},
  user: { password: 'password', name: 'user', role: 'user', capabilities: ['read']},
};

export const LoginContext = React.createContext();



export default function LoginProvider(props) {
  let [loggedIn , setLoggedIn]=useState(false);
  let [user , setUser]=useState({capabilities:[]});



   const login=(username , password)=>{
     if(testUsers[username] && password==testUsers[username].password){
      const token=jwt.sign(testUsers[username] , 'secret');
      console.log("tokken>>>" , token)
      validateToken(token);
     }else{
      console.log('try again')
      return(
       <p>try again</p>
      )
     }

  }

  const validateToken=(token)=>{
    if(token){
      const user=jwt.verify(token , 'secret');
      console.log("malware token" , token)
      setLoggedInstate(true , token , user)
    }else{
      setLoggedInstate(false ,null,{})
    }
  }

  const  setLoggedInstate=(isLoggedIn , token , user)=>{
    setLoggedIn(isLoggedIn)
    setUser(user)
    cookie.save('auth' , token)
  }

  const can=(capability)=>{
   return user?.capabilities?.includes(capability)
  }

  const logout=()=>{
     setLoggedInstate(false , null , {})
  }

  useEffect(()=>{
    const qs = new URLSearchParams(window.location.search);
    console.log("window.location.search",window.location.search)
    // console.log("qs",qs.getAll("token"))
    const cookieToken = cookie.load('auth');
     const token = qs.get("token") ||cookieToken || null;
     console.log('cookieToken' , cookieToken)
    console.log("tokken" , token)
     validateToken(token);
  },[])

  const state={
    can:can,
    login:login,
    logout:logout,
    user:user,
    loggedIn:loggedIn
  }
  return (
    <LoginContext.Provider value={state}>
       {props.children}
    </LoginContext.Provider>
  )
}



