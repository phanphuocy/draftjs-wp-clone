import React from "react";
import "./EditPostHeader.scss";

// Import custom components

// Import routers
import { useHistory } from "react-router-dom";

const BackButton = props => {
  return (
    <button className="back-button" onClick={props.goBack}>
      Trở về
    </button>
  );
};

const EditPostHeader = () => {
  let history = useHistory();
  const goBack = () => {
    history.push("/admin");
  };
  return (
    <header className="ep-header-container">
      <div className="ep-header-left">
        <BackButton goBack={goBack} />
      </div>
    </header>
  );
};

export default EditPostHeader;
