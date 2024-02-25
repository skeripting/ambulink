import React from "react";
import "./TextField.scss";

function TextField(props) {
  return (
    <>
      <input
        type={props.type ?? "text"}
        placeholder={props.placeholder}
        color={props.color ?? "red"}
        className={props.className}
        name={props.name}
      ></input>
    </>
  );
}

export default TextField;
