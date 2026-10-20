import React, { useState } from "react";

export default function About() {
  const [mystyle, setmystyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btntext, setBtntext] = useState("enable light mode");

  const toggle = () => {
    if (mystyle.color === "white") {
      setmystyle({
        color: "black",
        backgroundColor: "white",
        border:"2px solid black"
      });
      setBtntext("enable dark mode");
    } else {
      setmystyle({
        color: "white",
        backgroundColor: "black",
         border:"2px solid white"
      });
      setBtntext("enable light mode");
    }
  };

  return (
    <>
      <div className="container" style={mystyle}>
        <h1 className="my-3">About us</h1>
        <div className="accordion">
          <details
            className="accordion-item"
            name="accordionExample"
            open
            style={mystyle}
          >
            <summary className="accordion-button" style={mystyle}>
              accordin item 1
            </summary>
            <div className="accordion-body" style={mystyle}>
              <strong>This is the first item’s accordion body.</strong> It is
              shown by default because the <code>open</code> attribute is
              present. The native <code>&lt;details&gt;</code> element handles
              all the show/hide logic without any JavaScript. You can put any
              HTML content within the <code>.accordion-body</code>.
            </div>
          </details>

          <details
            className="accordion-item"
            name="accordionExample"
            style={mystyle}
          >
            <summary className="accordion-button" style={mystyle}>
              accordin item 2
            </summary>
            <div className="accordion-body" style={mystyle}>
              <strong>This is the second item’s accordion body.</strong> The{" "}
              <code>name</code> attribute groups this with other accordion
              items. When you open this item, any other open item in the same
              group will close automatically.
            </div>
          </details>

          <details
            className="accordion-item"
            name="accordionExample"
            style={mystyle}
          >
            <summary className="accordion-button" style={mystyle}>
              accordin item 3
            </summary>
            <div className="accordion-body" style={mystyle}>
              <strong>This is the third item’s accordion body.</strong> This
              exclusive accordion behavior is built into the browser, no
              Bootstrap JavaScript required. Just use matching{" "}
              <code>name</code> attributes on your <code>&lt;details&gt;</code>{" "}
              elements.
            </div>
          </details>
        </div>

        <div className="container">
          <button
            onClick={toggle}
            type="button"
            className="btn btn-primary my-3"
          >
            {btntext}
          </button>
        </div>
      </div>
    </>
  );
}