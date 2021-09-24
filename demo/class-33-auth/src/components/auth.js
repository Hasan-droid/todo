import React, { useContext } from 'react';
import {When} from 'react-if';
import LoginProvider from './context';
import { LoginContext } from './context';



export default function auth(props) {
  
    const loginContext=useContext(LoginContext);
    const canDo=loginContext.can(props.capability);
    const isLoggedIn=loginContext.loggedIn;
    console.log("canDo" ,canDo);
    console.log("loggedIn " , isLoggedIn)
    return (
        <When condition={canDo && isLoggedIn}>
          
            {props.children}
          
        </When>
    )
}
