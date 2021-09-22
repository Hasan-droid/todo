import React from "react";
import { SettingsContext } from "../context/site";
import {ThemeContext} from "../context/theme";

export default class Content extends React.Component{
    render(){
  
        return(
            <div>
                <h2>Content Rendered via class component</h2>
                <SettingsContext.Consumer>
                    
                    {/*  siteContext holds object containts the state on SettingsContext */}
                    {siteContext =>(
                        
                        <>
                        {
                                  console.log("site Context" , siteContext)
                        }
                        <h1>{siteContext.title}</h1>
                        <div>
                            <a target="_blank"href={`http://twitter.com/${siteContext.twitter}`}>@{siteContext.twitter}</a>
                        </div>
                        </>
                    )

                    }
                </SettingsContext.Consumer>
                <ThemeContext>
                    {thecontext=>(
                       <h2>current mode : {thecontext.mode}</h2>
                    )

                    }
                   
                </ThemeContext>
            </div>
        )
    }
}