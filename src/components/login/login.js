import React, { useContext, useState } from 'react';
import {When} from 'react-if';

import { LoginContext } from '../loginProvider/context';


export const logContext=React.createContext();
export default function Login(props) {

  const [user,setUser]=useState('');
  const [password,setPassword]=useState('');
  const context=useContext(LoginContext)

  const handleChange=e=>{
    if(e.target.name=='username')
    setUser(e.target.value)
    if(e.target.name=='password')
    setPassword(e.target.value)

  }

 const handleSubmit = e => {
    e.preventDefault();
    console.log('userName: ' , user , "password: " , password)
    context.login(user, password);
  };

  const state={
      handleChange,
      handleSubmit
  }
  return (
      
    <logContext.Provider value={state}>
      {props.children}
    </logContext.Provider>
    
    
   
  )
}


