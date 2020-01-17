import React from "react";
import "./EditPostHeader.scss";
import PropTypes from "prop-types";

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
  const { submitHandler, isNew } = props;
  const onClickHandler = () => {
    submitHandler();
  };
  return (
    <button className="save-post-btn" onClick={onClickHandler}>
      {isNew ? "Đăng" : "Cập nhập"}
    </button>
  );
};

const EditPostHeader = props => {
  let history = useHistory();
  const goBack = () => {
    history.push("/admin/published");
  };
  return (
    <header className="ep-header-container">
      <div className="ep-header-left">
        <BackButton goBack={goBack} />
        <p className="site-name">Phan Phước Ý</p>
        <span className="post-length">{props.postLength}</span>
      </div>
      <div className="ep-header-right">
        <SavePostButton
          submitHandler={props.submitHandler}
          isNew={props.isNew}
        />
      </div>
    </header>
  );
};

EditPostHeader.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  postLength: PropTypes.number.isRequired
};

export default EditPostHeader;
