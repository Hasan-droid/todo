import React from 'react'
import ThemeProvider from './context/theme';
import SettingsProvider from './context/site';
import './app.css'
import Main from './components/main';
export default class App extends React.Component {
    render(){
        return (
               <ThemeProvider>
               <SettingsProvider>
                   <Main/>
               </SettingsProvider>
               </ThemeProvider>
         
   
          
       )  
    }
    
}
