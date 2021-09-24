
import React, { useContext, useState } from 'react'
import { When } from 'react-if';
import { LoginContext } from './context'

export default function login() {

const contextType=useContext(LoginContext)
let [user ,setUser ]=useState('');
let [password , setPassword]=useState('')

let handleChange = e => {
    
  
     if(e.target.name =="password")
  setPassword(e.target.value);
   if(e.target.name =="username")
  setUser([e.target.value]);
}

let handleSubmit = e => {
  e.preventDefault();
 
  // use login context to perform login operation
  contextType.login(user, password);
}


    return (
      <>
        
       <When condition={!contextType.loggedIn}>
       <form onSubmit={handleSubmit}>
               <input type="text" name="username" placeholder="user email" onChange={handleChange}/>
               <input type="password" name="password" placeholder="password" onChange={handleChange}/>
               <button type="submit">login</button>
               </form>
           
       </When>
       <When condition={contextType.loggedIn}>
           {/* user has email from the tokken and capailites add to it in 
           validatemyTokken function */}
           <div>{contextType.user.email}</div>
           <button onClick={contextType.logout}>logout</button>
       </When>

    
      </>
    )
}
