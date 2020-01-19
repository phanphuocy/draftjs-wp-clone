import React from "react";
import "./MediumBoxContainer.scss";

function MediumBoxContainer(props) {
  let className;
  if (props.whiteBackground) {
    className = "medium-box-container white-bg";
  } else {
    className = "medium-box-container";
  }
  return <div className={className}>{props.children}</div>;
}

export default MediumBoxContainer;
