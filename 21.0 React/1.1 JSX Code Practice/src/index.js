//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My Favourite Hymns</h1>
    <ul>
      <li>301 - Nearer, Still Nearer</li>
      <li>303 - Beneath the Cross of Jesus</li>
      <li>185 - Jesus is all the World to Me</li>
    </ul>
  </div>,
  document.getElementById("root")
);
