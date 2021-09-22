import React,{ useContext } from "react";
import  { ThemeContext } from "../context/theme";
import  {Navbar , Alignment , Switch}   from "@blueprintjs/core";



export default function Header(props){

    const themeContext=useContext(ThemeContext)
   return (
       <header>

{/* <Navbar>
    <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Blueprint</Navbar.Heading>
        <Navbar.Divider />
        <Button className="bp3-minimal" icon="home" text="Home" />
        <Button className="bp3-minimal" icon="document" text="Files" />
    </Navbar.Group> 
</Navbar>*/}
{
    console.log("themeContext>>header" , themeContext)
}
<Navbar className={`bp3-${themeContext.testMode}`}>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>Mode from Context:{themeContext.testMode}
                    <Switch label={themeContext.testMode== "pink" ? "go light" : "go pink"}checked={themeContext.testMode =='pink'}  onChange={themeContext.toggelPinkMode}  />
                    </Navbar.Heading>
                </Navbar.Group>
                </Navbar>

{/* <Navbar className={`bp3-${themeContext.mode}`}>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>Mode from Context: {themeContext.mode} 
                    <Switch label={themeContext.mode == 'dark' ? 'Go Light' : 'Go Dark' } checked={themeContext.mode == 'dark'} onChange={themeContext.toggleMode} />
                    </Navbar.Heading>
                </Navbar.Group>
            </Navbar> */}
       </header>

    )
}