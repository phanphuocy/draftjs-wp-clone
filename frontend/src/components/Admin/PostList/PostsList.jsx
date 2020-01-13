import React, { useEffect, useState } from "react";
import "./PostsList.scss";
import Img from "react-image";

// Import routers
import { Link, useLocation } from "react-router-dom";

const PostItem = props => {
  let { date, title, thumbnailUrl } = props;
  return (
    <div className="post-list-item">
      <div className="post-item-left">
        <h3 className="post-item-title">
          <Link to="/admin/edit-post/p01">{title}</Link>
        </h3>
        <span className="post-item-date">{date}</span>
      </div>
      <div className="post-item-right">
        <Img src={process.env.PUBLIC_URL + thumbnailUrl} width={100} />
      </div>
    </div>
  );
};

const PostsList = props => {
  const { postData } = props;
  const [displayPosts, setDisplayPosts] = useState([]);
  let path = useLocation().pathname.replace("/admin/", "");

  // Try to render as the path changed
  useEffect(() => {
    let filtered = postData.filter(post => post.status === path);
    setDisplayPosts(filtered);
  }, [path, postData]);

  return (
    <div className="post-list-container">
      <div className="post-list-title">
        <h3>Posts</h3>
      </div>
      <div className="post-list">
        {displayPosts.map(post => {
          return (
            <PostItem
              key={post.id}
              title={post.title}
              date={post.dateUpdated}
              thumbnailUrl={post.thumbnailUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostsList;
