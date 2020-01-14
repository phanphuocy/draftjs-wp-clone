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
  const currentPath = useLocation().pathname;
  const { postData } = props;
  const [buttonGroup, setButtonGroup] = useState([
    {
      key: "status-01",
      url: "/admin/published",
      type: "published",
      name: "Đã Đăng",
      quanlity: 0
    },
    {
      key: "status-02",
      url: "/admin/draft",
      type: "draft",
      name: "Đang viết",
      quanlity: 0
    },
    {
      key: "status-03",
      url: "/admin/trashed",
      type: "trashed",
      name: "Đã Xóa",
      quanlity: 0
    }
  ]);

  useEffect(() => {
    // Create a copy of button group to re-calculate
    let buttonGroupCopy = [...buttonGroup];

    // Reset button group
    buttonGroupCopy.forEach(button => (button.quanlity = 0));

    // Counting number of posts per button
    buttonGroupCopy.forEach((button, buttonIndex) => {
      Object.keys(postData).forEach(index => {
        if (postData[index].status === button.type) {
          // this also works: buttonGroupCopy[buttonIndex].quanlity++;
          button.quanlity++;
        }
      });
    });

    // Aplly new state
    setButtonGroup(buttonGroupCopy);
  }, [postData]);

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

PostsNavigationButton.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quanlity: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default PostsNavigation;
