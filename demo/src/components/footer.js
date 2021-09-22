import React, { useContext } from "react";
import Theme from "../context/theme";
import { SettingsContext } from "../context/site";


import { Card, Elevation } from "@blueprintjs/core";

export default function Footer() {
    const settingsContext=useContext(SettingsContext);
    return (
      <footer>
          <Card elevation={Elevation.TWO}>
              <div>CopyRights 2021 {settingsContext.twitter}</div>
              <div>Twitter <a href ={`http://twitter.com/${settingsContext.twitter}`}>@{settingsContext.twitter}</a></div>
        
          </Card>
      </footer>
    )
}
