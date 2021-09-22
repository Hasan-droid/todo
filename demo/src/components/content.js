import React, { useContext } from "react";
import { SettingsContext } from "../context/site";
import {ThemeContext} from "../context/theme";

// export default class Content extends React.Component{
//     render(){
  
//         return(
//             <div>
//                 <h2>Content Rendered via class component</h2>
//                 <SettingsContext.Consumer>
                    
//                     {/*  siteContext holds object containts the state on SettingsContext */}
//                     {siteContext =>(
                        
//                         <>
//                         {
//                                   console.log("site Context" , siteContext)
//                         }
//                         <h1>{siteContext.title}</h1>
//                         <div>
//                             <a target="_blank"href={`http://twitter.com/${siteContext.twitter}`}>@{siteContext.twitter}</a>
//                         </div>
//                         </>
//                     )

//                     }
//                 </SettingsContext.Consumer>
//                 <ThemeContext>
//                     {thecontext=>(
//                        <h2>current mode : {thecontext.mode}</h2>
//                     )

//                     }
                   
//                 </ThemeContext>
//             </div>
//         )
//     }
// }

export default function Content(props){

    const site=useContext(SettingsContext)
    const theme=useContext(ThemeContext)

    const titleHandler=e=>{
        site.setTitle(e.target.value);
    }

    const twitterHandler=e=>{
        site.setTwitter(e.target.value);

    }

    return(
        <div>
            <h2>Content Renderd via class component</h2>
            <>
            <h1>{site.title}</h1>
            <div>
                <a target="_blank" href={`http://twitter.com/${site.twitter}`}>@{site.twitter}</a>
            </div>
            <form>
                <label>Title</label>
                <input type="text" onChange={titleHandler} value={site.title}/>
                <label>Twitter</label>
                <input type="text" onChange={twitterHandler} value={
                    site.twitter
                }/>
            </form>
            </>
            <h2>current Mode :{theme.mode}</h2>
        </div>
    )
}