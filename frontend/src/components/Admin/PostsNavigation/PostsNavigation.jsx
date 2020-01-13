import React, { useEffect, useState } from "react";
import "./PostsNavigation.scss";
import PropTypes from "prop-types";

// Import routers
import { Link, useLocation } from "react-router-dom";

const PostsNavigationButton = props => {
  let { url, name, quanlity, currentPath, isActive } = props;
  return (
    <li>
      <Link to={url} className={isActive}>
        {name} <span className="postsQuanlity">{quanlity}</span>
      </Link>
    </li>
  );
};

const PostsNavigation = props => {
  let currentPath = useLocation().pathname;
  const { postData } = props;
  const [buttonGroup, setButtonGroup] = useState([
    {
      key: "status01",
      url: "/admin/published",
      type: "published",
      name: "Đã Đăng",
      quanlity: 0
    },
    {
      key: "status02",
      url: "/admin/draft",
      type: "draft",
      name: "Đang viết",
      quanlity: 0
    },
    {
      key: "status03",
      url: "/admin/trashed",
      type: "trashed",
      name: "Đã Xóa",
      quanlity: 0
    }
  ]);

  useEffect(() => {
    console.log("im re rendered");
    console.log("post nav", typeof postData);
    Object.keys(postData).forEach(post => {
      let match = buttonGroup.filter(
        button => button.type === postData[post].status
      );
      match[0].quanlity++;
      // Why this works without spreading match array????????????????????????
      setButtonGroup([...buttonGroup]);
    });
  }, []);

  return (
    <div className="post-navigation-container">
      <h2 className="post-navigation-title">Bài viết</h2>
      <div className="post-navigation-group-button">
        <ul>
          {buttonGroup.map(button => {
            return (
              <PostsNavigationButton
                key={button.key}
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
};

export default PostsNavigation;
