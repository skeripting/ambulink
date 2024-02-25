import React from "react";
import "./FlipbookLayout.scss";

function FlipbookLayout(props) {
  return (
    <div className="flipbook-layout">
      <div className="main" color={props.color}>
        <div className="left">{props.left}</div>
        <div className="right">{props.right}</div>
      </div>
    </div>
  );
}

export default FlipbookLayout;
