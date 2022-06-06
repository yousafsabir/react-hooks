import React from "react";

const boilerPlate = () => {
    const Styles = {
        flex: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        container: {
            margin: "2rem auto",
        },
        inner: {
            paddingBlock: "0.5rem",
        },
        line: {
            width: "100%",
            height: "1px",
            backgroundColor: "#3a3a3a",
        },
    };
    return (
        <div style={Styles.container && Styles.flex}>
            <hr />
            <div style={Styles.inner && Styles.flex}></div>
            <hr />
        </div>
    );
};

export default boilerPlate;
