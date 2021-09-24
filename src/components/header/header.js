import React, { useContext } from 'react'
import './header.css'
import { logContext } from '../login/login'
import { When } from 'react-if';
import { LoginContext } from '../loginProvider/context';
export default function Header() {
  const context=useContext(logContext);
  const loginContx=useContext(LoginContext)
  console.log("header-context",context)
    return (
      <>
        <div className='header' >
      <When condition={!loginContx.loggedIn}>
     
           
            <form onSubmit={context.handleSubmit}>
       <input className='boundes'
         placeholder="UserName"
         name="username"
         onChange={context.handleChange}
       />
       <input  className='boundes'
         placeholder="password"
         name="password"
         onChange={context.handleChange}
       />
       <button  className='boundes' type="submit">Login</button>
     </form>
     </When>
     <When condition={loginContx.loggedIn}>
     <button onClick={loginContx.logout} className='boundes' type="submit">logout</button> 
     </When>
     </div>
     </>
    )
}
