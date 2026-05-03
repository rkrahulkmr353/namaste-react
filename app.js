import React from "react";
import ReactDOM from "react-dom/client";

const JsxHeading = () => <h1 id="heading">Namaste React using JSX</h1>

// className => class in html
// React component
const HeadingComponent = () => (
    <div>
        <JsxHeading/> 
        <h1 className="head">
        Namaste React using React component</h1>
        {200 + 500}
        {JsxHeading()}
        <JsxHeading></JsxHeading>
        <JsxHeading/>
    </div>
    );
// component composition : component inside component is called as component composition

const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * react component will not get rendered directly
 * we need to add react component inside < /> to get react component get rendered
 * we can see it below
 * also, we can render another react component inside another react component
 * that we also called component composition
 * 
 * we have executed JS code inside curly braces {}
 * 
 * {JsxHeading()}
    <JsxHeading></JsxHeading>
    <JsxHeading/>

    above all three will perform same thing, 
    </> or <></> will render JSX code
    {JsxHeading} = also work as React component is also a JS at the end of the day
 */
root.render(<HeadingComponent />);