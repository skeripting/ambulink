import React from "react";
import "./SelectBox.scss";

function SelectBox(props) {
  return (
    <>
      <select
        type={props.type ?? "text"}
        placeholder={props.placeholder}
        color={props.color ?? "red"}
        className={props.className}
        name={props.name}
      >
        {props.children}
      </select>
    </>
  );
}

export default SelectBox;
