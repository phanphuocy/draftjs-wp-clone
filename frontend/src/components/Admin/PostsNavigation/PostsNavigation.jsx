import React from "react";
import "./PostsNavigation.scss";

// Import routers
import { Link, useLocation } from "react-router-dom";

const PostsNavigationButton = props => {
  let { url, name, quanlity, currentPath, isActive } = props;
  console.log(url, url === currentPath);
  return (
    <li>
      <Link to={url} className={isActive}>
        {name} <span className="postsQuanlity">{quanlity}</span>
      </Link>
    </li>
  );
};

function PostsNavigation() {
  let currentPath = useLocation().pathname;
  let buttonGroup = [
    {
      url: "/admin/published",
      name: "Đã Đăng",
      quanlity: 12
    },
    {
      url: "/admin/draft",
      name: "Đang viết",
      quanlity: 1
    },
    {
      url: "/admin/trashed",
      name: "Đã Xóa",
      quanlity: 12
    }
  ];
  return (
    <div className="post-navigation-container">
      <h2 className="post-navigation-title">Bài viết</h2>
      <div className="post-navigation-group-button">
        <ul>
          {buttonGroup.map(button => {
            console.log(button);
            return (
              <PostsNavigationButton
                url={button.url}
                name={button.name}
                quanlity={button.quanlity}
                isActive={button.url === currentPath ? "active" : null}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PostsNavigation;
