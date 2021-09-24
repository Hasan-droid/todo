import React from 'react';

import ToDo from './components//todo.js';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header.js';
import SettingsContext  from './components/context.js';
import LoginProvider from './components/loginProvider/context.js';
import Login from './components/login/login.js';
import Auth from './components/auth/auth.js';
export default class App extends React.Component {
  render() {
    return (
      <LoginProvider>
      <SettingsContext>
      <Login>
    
      
         <Header/>
         <Auth> 
      <ToDo />
      
     
      </Auth>
      </Login>
      </SettingsContext>
      </LoginProvider>
    )
  }
}
