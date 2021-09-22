import React, { useState } from "react";

export const SettingsContext=React.createContext();

export default function SettingsProvider(props){
    const [twitter , setTwitter]=useState('hasan_by');
    const [title , setTitle]=useState('my site');
    const state={
        title,
        twitter,
        setTwitter,
        setTitle
    }
    return(

        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>

    )
}