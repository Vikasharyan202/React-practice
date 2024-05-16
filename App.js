import React from "react";
import ReactDOM from "react-dom/client";
const heading  = React.createElement("h1", {id:"heading", class:"header"}, "Hello, Welcome to the react course");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);