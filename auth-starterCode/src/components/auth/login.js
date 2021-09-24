import React, { useContext, useState } from 'react';
import {When} from 'react-if';

import { LoginContext } from './context.js';



export default function Login() {
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
  return (
    <>
        <When condition={context.loggedIn}>
          <button onClick={context.logout}>Log Out</button>
        </When>

        <When condition={!context.loggedIn}>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="UserName"
              name="username"
              onChange={handleChange}
            />
            <input
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </form>
        </When>
      </>
  )
}


// class Login extends React.Component {
//   static contextType = LoginContext;

//   constructor(props) {
//     super(props);
//     this.state = { username: '', password: '' };
//   }

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     console.log('userName: ' , this.state.username , "password: " , this.state.password)
//     this.context.login(this.state.username, this.state.password);
//   };

//   render() {
//     return (
//       <>
//         <When condition={this.context.loggedIn}>
//           <button onClick={this.context.logout}>Log Out</button>
//         </When>

//         <When condition={!this.context.loggedIn}>
//           <form onSubmit={this.handleSubmit}>
//             <input
//               placeholder="UserName"
//               name="username"
//               onChange={this.handleChange}
//             />
//             <input
//               placeholder="password"
//               name="password"
//               onChange={this.handleChange}
//             />
//             <button type="submit">Login</button>
//           </form>
//         </When>
//       </>
//     );
//   }
// }

// export default Login;
