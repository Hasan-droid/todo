import React from "react";

export const ThemeContext=React.createContext();

export default class Theme extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mode:'dark'
        }
    }

   

    render(){
        return(
          <ThemeContext.Provider value={this.state}>
              {this.props.children}
          </ThemeContext.Provider>
        )
    }
}