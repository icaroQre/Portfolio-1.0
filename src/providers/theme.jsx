import React, { useState } from "react";

export const ThemeStateContext = React.createContext();

export const ThemeStateProvider = (props) => {

    const [themeState, setThemeState] = useState('dark');

    return(
        <ThemeStateContext.Provider value={{themeState, setThemeState}}>
            {props.children}
        </ThemeStateContext.Provider>
    )
};