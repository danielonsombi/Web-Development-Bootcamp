import React from "react";
import ReactDOM from "react-dom";

const fName = "Daniel";
const lName = "Onsombi";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>
      Your lucky number is {num} but the random number is set to{" "}
      {Math.floor(Math.random() * 10)}
    </p>
    <p>Copyright {new Date().getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
