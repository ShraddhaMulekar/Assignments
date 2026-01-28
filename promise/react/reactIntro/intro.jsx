// const element = React.createElement("div", {id:"container"}, [
//     React.createElement("h1", null, "Shraddha, I am from Nagpur, Maharashtra."),
//     React.createElement("h2", {style:{color:"navy", textAlign:"center"}}, "I love to code."),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);


import React from "react";

const myElement = (
    <div id="container">
        <h1>Shraddha, I am from Nagpur, Maharashtra.</h1>
        <h2 style={{color:"navy", textAlign:"center"}}>I love to code.</h2>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myElement);