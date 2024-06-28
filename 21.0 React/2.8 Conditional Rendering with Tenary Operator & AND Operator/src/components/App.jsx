import React from "react";
import Login from "./Login";

var isLoggedIn = true;

var currentTime = new Date().getHours();

// const renderConditionally = () => {
//   if (isLoggedIn) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// };

function App() {
  return (
    <div className="container">
      {
        /* isLoggedIn === true ? <h1>Hello</h1> : <Login /> */
        currentTime > 12 && <h1>Why are you still working? </h1>
      }
    </div>
  );
}

export default App;
