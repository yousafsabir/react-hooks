import React, { createContext, useState } from "react";
import ContextChild from "./ContextChild";

// creating theme store
export const ThemeContext = createContext();
const UseContext = () => {
    const [dark, setDark] = useState(true);

    const toggleTheme = () => {
        setDark((prevValue) => !prevValue);
    };
    return (
        <>
            <h2>useContext Here</h2>
            {/* Providing store to components inside  */}
            <ThemeContext.Provider value={dark}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <ContextChild />
            </ThemeContext.Provider>
        </>
    );
};

export default UseContext;
