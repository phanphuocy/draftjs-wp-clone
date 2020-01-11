import React from "react";
import "./PostsNavigation.scss";

// Import routers
import { Link } from "react-router-dom";

function PostsNavigation() {
  return (
    <div className="post-navigation-container">
      <h2 className="post-navigation-title">Bài viết</h2>
      <div className="post-navigation-group-button">
        <ul>
          <li className="post-navigation-button">
            <Link to="/admin/published">Đã Đăng</Link>
          </li>
          <li className="post-navigation-button">
            <Link to="/admin/draft">Đang Viết</Link>
          </li>
          <li className="post-navigation-button">
            <Link to="/admin/trashed">Đã Xóa</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostsNavigation;
