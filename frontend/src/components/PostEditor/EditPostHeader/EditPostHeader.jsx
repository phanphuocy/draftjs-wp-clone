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
const SavePostButton = props => {
  const { submitHandler } = props;
  const onClickHandler = () => {
    submitHandler();
  };
  return (
    <button className="save-post-btn" onClick={onClickHandler}>
      Đăng
    </button>
  );
};

const EditPostHeader = props => {
  const { createNewPost } = props;
  let history = useHistory();
  const goBack = () => {
    history.push("/admin/published");
  };
  return (
    <header className="ep-header-container">
      <div className="ep-header-left">
        <BackButton goBack={goBack} />
      </div>
      <div className="ep-header-right">
        <SavePostButton submitHandler={props.submitHandler} />
      </div>
    </header>
  );
};

export default EditPostHeader;
