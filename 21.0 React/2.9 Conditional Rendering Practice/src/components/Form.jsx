import React from "react";
import Button from "./Button";
import Input from "./Input";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />

      {!props.IsRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <Button
        type="submit"
        btnLabel={props.IsRegistered ? "Register" : "Login"}
      />
    </form>
  );
}

export default Form;
