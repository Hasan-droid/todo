import React from "react";
import Content from "./content";
import { ThemeContext } from "../context/theme";

export default class Main extends React.Component {
    static contextType = ThemeContext;
    render() {
        console.log("context", this.context)
        return (
            <ThemeContext.Consumer>
                {themeContext => (
                    <div className={themeContext.mode} >
                        <Content />
                    </div>
                )
    }
            </ThemeContext.Consumer>
        

             
            
        )
}
}