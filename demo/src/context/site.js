import React from "react";

export const SettingsContext=React.createContext();

export default function SettingsProvider(props){
    const state={
        title:'my Site',
        twitter:'hasan_by',
        res:"just checking"
    }
    return(

        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>

    )
}