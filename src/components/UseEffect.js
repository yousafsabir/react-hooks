import React, { useState, useEffect } from "react";

const UseEffect = () => {
    // Styling
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
    const [resource, setResource] = useState("Posts");
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
            .then((response) => response.json())
            .then((json) => setItems(json));
    }, [resource]);

    // return the code to terminate effect on component unmounts
    useEffect(() => {
        const unsub = () => {
            console.log("when component unmounts");
        };
        return unsub;
    }, [resource]);

    return (
        <div style={Styles.container}>
            <hr />
            <div style={Styles.flex}>
                <button onClick={() => setResource("Posts")}>Posts</button>
                <button onClick={() => setResource("Comments")}>
                    Comments
                </button>
                <button onClick={() => setResource("Users")}>Users</button>
                <h2>{resource}</h2>
            </div>
            {items.map((item) => {
                return <pre key={item.id}>{JSON.stringify(item)}</pre>;
            })}
            <hr />
        </div>
    );
};

export default UseEffect;
