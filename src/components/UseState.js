import React, { useState } from "react";

const UseState = () => {
    const Styles = {
        flex: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
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

    const [count, setCount] = useState(() => {
        console.log("This will only log once on component mount");
        console.log("this is useful for managing complex state");
        return 0;
    });

    return (
        <div style={Styles.container}>
            <hr />
            <div style={Styles.flex}>
                <button
                    style={Styles.button}
                    onClick={() => setCount((prevCount) => prevCount + 1)}
                >
                    +
                </button>
                <div>{count}</div>
                <button
                    style={Styles.button}
                    onClick={() => setCount((prevCount) => prevCount - 1)}
                >
                    -
                </button>
            </div>

            <hr />
        </div>
    );
};

export default UseState;
