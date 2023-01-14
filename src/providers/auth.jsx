import React, { useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {

    const [menuVisible, setMenuVisible] = useState(false);

    return(
        <AuthContext.Provider value={{menuVisible, setMenuVisible}}>
            {props.children}
        </AuthContext.Provider>
    )
};