import React, { useContext } from "react";
import { ThemeContext } from "./UseContext";

const ContextChild = () => {
    const darkTheme = useContext(ThemeContext);
    const style = {
        container: {
            width: "250px",
            height: "150px",
            margin: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: darkTheme ? "#333" : "#ccc",
            color: darkTheme ? "#ccc" : "#333",
        },
    };
    return (
        <div style={style.container}>
            <h2>Theme</h2>
        </div>
    );
};

export default ContextChild;
