import React from "react";
import "./NewPostButton.scss";

// Import router
import { Link } from "react-router-dom";

const NewPostButton = props => {
  const { createEmptyEditing } = props;

  const onClickHandle = () => {
    createEmptyEditing();
  };

  return (
    <Link to="/admin/edit-post">
      <button className="new-post-btn shadow" onClick={onClickHandle}>
        Tạo bài mới
      </button>
    </Link>
  );
};

export default NewPostButton;
