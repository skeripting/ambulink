import React, { forwardRef } from "react";
import "./TextField.scss";

const TextField = forwardRef((props, ref) => {
  return (
    <input
      type={props.type ?? "text"}
      placeholder={props.placeholder}
      className={props.className}
      name={props.name}
      id={props.id}
      // Directly use the ref here
      ref={ref}
    />
  );
});

export default TextField;
