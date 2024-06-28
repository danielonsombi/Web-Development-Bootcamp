import React from "react";

function Button(props) {
  return <button type={props.type}>{props.btnLabel}</button>;
}

export default Button;
