import React from "react";
import "./NewPostButton.scss";

// Import router
import { Link } from "react-router-dom";

const NewPostButton = props => {
  return (
    <Link to="/admin/new-post">
      <button className="new-post-btn shadow">Tạo bài mới</button>
    </Link>
  );
};

export default NewPostButton;
