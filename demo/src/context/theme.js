import React from "react";

export const ThemeContext=React.createContext();

export default class Theme extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mode:'dark',
            testMode:'pink',
            toggleMode:this.toggleMode,
           toggelPinkMode: this.toggelPinkMode
        }
    }

   toggleMode=()=>{
     
   this.setState({mode:this.state.mode=="dark" ?'light':'dark'})
    
   }

   toggelPinkMode=()=>{

    this.setState({testMode:this.state.testMode=="pink" ?'light':'pink'})

   }

    render(){
        return(
          <ThemeContext.Provider value={this.state}>
              {this.props.children}
          </ThemeContext.Provider>
        )
    }
}