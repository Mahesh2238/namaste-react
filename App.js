import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World From React!!");
const parent = React.createElement("div",{id:"parent"},[React.createElement("div",{className:"child1 child"},React.createElement("h1",{},"Hello Mahesh")),
React.createElement("div",{className:"child2 child"},React.createElement("h1",{},"Hello Swami"))]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);