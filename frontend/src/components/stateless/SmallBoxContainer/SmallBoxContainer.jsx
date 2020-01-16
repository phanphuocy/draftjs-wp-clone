import React from "react";
import "./SmallBoxContainer.scss";

function SmallBoxContainer(props) {
  let className;
  if (props.whiteBackground) {
    className = "small-box-container white-bg";
  } else {
    className = "small-box-container";
  }
  return <div className={className}>{props.children}</div>;
}

export default SmallBoxContainer;
