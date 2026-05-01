import React from "react";
import ReactDOM from "react-dom/client";

/**
 * 
 * <div id = "parent">
 *  <div id = "child">
 *      <h1>I'm an h1 tag</h1>
 *      <h2>I'm an h2 tag</h2> // want to give multiple children tag, put array instead of object
 *  </div>
 * </div>
 */


const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);

const h1Tag = React.createElement("h1", {}, "I'm an h1 tag");
const h2Tag = React.createElement("h2", {}, "I am an h2 tag");

const child = React.createElement("div", {id: "child"}, [h1Tag, h2Tag])
const parent = React.createElement("div", {id: "parent"}, child);

console.log(parent);
root.render(parent);

