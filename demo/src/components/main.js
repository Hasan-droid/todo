import React from "react";
import Content from "./content";
import { ThemeContext } from "../context/theme";
import Footer from './footer';
import Header from './header';

export default class Main extends React.Component {
    static contextType = ThemeContext;
    render() {
        console.log("context", this.context)
        return (
            <ThemeContext.Consumer>
                {themeContext => (
                    <div className={themeContext.testMode} >
                       <Header/>
                        <Content />
                        <Footer/>
                    </div>
                )
    }
            </ThemeContext.Consumer>
        

             
            
        )
}
}