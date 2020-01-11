import React from "react";
import "./SmallBoxContainer.scss";

function SmallBoxContainer(props) {
  return <div className="small-box-container">{props.children}</div>;
}

export default SmallBoxContainer;
