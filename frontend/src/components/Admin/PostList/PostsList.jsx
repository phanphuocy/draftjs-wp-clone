import React, { useEffect, useState, useContext } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import "./PostsList.scss";
import Img from "react-image";

// Import context
import PostContext from "../../../context/postContext/postContext";

// Import routers
import { Link, useLocation } from "react-router-dom";

// Import custom components
import PostOptionGroup from "../PostOptionGroup/PostOptionGroup";

const PostItem = props => {
  let { date, title, thumbnailUrl, post } = props;
  return (
    <div className="post-list-item">
      <div className="post-item-left">
        <h3 className="post-item-title">
          <Link to={"/admin/edit-post/" + post.id}>{title}</Link>
        </h3>
        <span className="post-item-date">{date}</span>
      </div>
      <div className="post-item-right">
        <Img src={process.env.PUBLIC_URL + thumbnailUrl} width={100} />
        <PostOptionGroup
          post={props.post}
          editSelectedPost={props.editSelectedPost}
          deleteSelectedPost={props.deleteSelectedPost}
          draftSelectedPost={props.draftSelectedPost}
        />
      </div>
    </div>
  );
};

const PostsList = props => {
  // Using context to display data and receive functions
  const postContext = useContext(PostContext);
  const {posts, editSelectedPost, deleteSelectedPost, draftSelectedPost} = postContext;

  // Doing filtering display posts
  const [displayPosts, setDisplayPosts] = useState([]);

  // Try to render as the path changed and posts change
  let path = useLocation().pathname.replace("/admin/", "");
  useEffect(() => {
    console.log("useEffect");
    let filtered = posts.filter(post => post.status === path);
    setDisplayPosts(filtered);
  }, [path, posts]);

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
              post={post}
              title={post.title}
              date={post.dateUpdated}
              thumbnailUrl={post.thumbnailUrl}
              editSelectedPost={editSelectedPost}
              deleteSelectedPost={deleteSelectedPost}
              draftSelectedPost={draftSelectedPost}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostsList;
