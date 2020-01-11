import React from "react";

// import style
import "./AddPostButton.scss";

// import icons
import { FiPlusSquare } from "react-icons/fi";

const AddPostButton = props => {
  return (
    <button className="AddPostButton">
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
