import React, { useState, useEffect } from "react";

const UseEffect = () => {
    const [resource, setResource] = useState("posts");
    const Styles = {
        flex: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBlock: "0.5rem",
        },
        container: {
            margin: "2rem auto",
        },
        line: {
            width: "100%",
            height: "1px",
            backgroundColor: "#3a3a3a",
        },
    };
    return (
        <div style={Styles.container}>
            <hr />
            <div style={Styles.flex}>
                <button>Posts</button>
                <button>Comments</button>
                <button>Users</button>
                <div>{resource}</div>
            </div>
            <hr />
        </div>
    );
};

export default UseEffect;
