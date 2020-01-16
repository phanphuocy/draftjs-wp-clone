import React from "react";

// import style
import "./AddPostButton.scss";

// import routers
import { useHistory } from "react-router-dom";

// import icons
import { FiPlusSquare } from "react-icons/fi";

const AddPostButton = props => {
  const history = useHistory();
  const onClickHandler = () => {
    history.push("/admin/new-post");
  };
  return (
    <button className="AddPostButton" onClick={onClickHandler}>
      <div className="ButtonName">
        <FiPlusSquare />
        <p>Viết</p>
      </div>
      <div className="ButtonSquareDiv">
        <div className="ButtonNumberStatus">
          <p>13</p>
        </div>
      </div>
    </button>
  );
};

export default AddPostButton;
