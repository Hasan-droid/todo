import React, { useEffect, useState } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

const testUsers = {
  admin: {password:'password', name:'Administrator', role:'admin', capabilities:['create','read','update','delete']},
  editor: { password: '123', name: 'Editor', role: 'editor', capabilities: ['read', 'update']},
  writer: { password: 'password', name: 'Writer', role: 'writer', capabilities: ['create']},
};

export const LoginContext = React.createContext();



export default function LoginProvider(props) {
  let [loggedIn , setLoggedIn]=useState(false);
  let [user , setUser]=useState({capabilities:[]});



   const login=(username , password)=>{
     console.log('recived username: ',username,'recived password: ',password)
     if(testUsers[username] && password==testUsers[username].password){
      const token=jwt.sign(testUsers[username] , 'secret');
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
      setLoggedInstate(true , token , user)
    }else{
      setLoggedInstate(false ,null,{})
    }
  }

  const  setLoggedInstate=(isLoggedIn , token , user)=>{
    setLoggedIn(isLoggedIn)
    setUser(user)
    cookie.save('token' , token)
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
    console.log("qs",qs.getAll("token"))
    const cookieToken = cookie.load('token');
     const token =  cookieToken || null;
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


// class LoginProvider extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       loggedIn: false,
//       can: this.can,
//       login: this.login,
//       logout: this.logout,
//       user: {capabilities:[]},
//     };
//   }

//   can = (capability) => {
//     return this?.state?.user?.capabilities?.includes(capability);
//   }

//   login = (username, password) => {
//     console.log("testUsers",testUsers[username].password)
//     if (testUsers[username ] && password==testUsers[username].password) {
//       // Create a "good" token, like you'd get from a server
//       const token = jwt.sign(testUsers[username],'secret');
//       console.log("token" , token)
//       this.validateToken(token);
//     }
//     else{
//       console.log('try again')
//      return(
//       <p>try again</p>
//      )
    
//     }
//   }

//   logout = () => {
//     this.setLoginState(false, null, {});
//   };

//   validateToken = token => {
//     try {
//       let user = jwt.verify(token,"secret");
//       console.log('user: ', user)
//       this.setLoginState(true, token, user);
//     }
//     catch (e) {
//       this.setLoginState(false, null, {});
//       console.log('Token Validation Error', e);
//     }

//   };

//   setLoginState = (loggedIn, token, user) => {
//     cookie.save('auth', token);
//     this.setState({ token, loggedIn, user });
//   };

//   componentDidMount() {
//     const qs = new URLSearchParams(window.location.search);
//     const cookieToken = cookie.load('auth');
//     const token = qs.get('token') || cookieToken || null;
//     this.validateToken(token);
//   }

//   render() {
//     return (
//       <LoginContext.Provider value={this.state}>
//         {this.props.children}
//       </LoginContext.Provider>
//     );
//   }
// }

// export default LoginProvider;
