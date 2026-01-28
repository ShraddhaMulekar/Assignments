// const element = React.createElement("div", {id:"container"}, [
//     React.createElement("h1", null, "Shraddha, I am from Nagpur, Maharashtra."),
//     React.createElement("h2", {style:{color:"navy", textAlign:"center"}}, "I love to code."),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);


import React from "react";

const myElement = <h1>hello world</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myElement);