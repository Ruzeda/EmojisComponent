import React, { createContext, useState } from "react";

export const Context = createContext();

const AppProvide = ({ props }) => {
    const [currentMood, setCurrentMood] = useState("Happy");
    const  [compliments, setCompliments] = useState([]);

    return (
        <Context.Provider value={{ currentMood, setCurrentMood, compliments, setCompliments }}>
            {props.children}
        </Context.Provider>
    );
};

export default AppProvide;