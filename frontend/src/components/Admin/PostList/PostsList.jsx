import React, { useEffect, useState, useContext } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import "./PostsList.scss";
import Img from "react-image";

// Import transition
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Import context
import PostContext from "../../../context/postContext/postContext";

// Import routers
import { Link, useLocation } from "react-router-dom";

// Import custom components
import PostOptionGroup from "../PostOptionGroup/PostOptionGroup";

const PostItem = ({ post }) => {
  return (
    <div className="post-list-item">
      <div className="post-item-left">
        <h3 className="post-item-title">
          <Link to={"/admin/edit-post/" + post.id}>{post.title}</Link>
        </h3>
        <span className="post-item-date">{post.dateUpdated}</span>
      </div>
      <div className="post-item-right">
        <Img src={process.env.PUBLIC_URL + post.thumbnailUrl} width={100} />
        <PostOptionGroup post={post} />
      </div>
    </div>
  );
};

const PostsList = props => {
  // Using context to display data and receive functions
  const postContext = useContext(PostContext);
  const { posts } = postContext;

  // Doing filtering display posts
  const [displayPosts, setDisplayPosts] = useState([]);

  // Try to render as the path changed and posts change
  let path = useLocation().pathname.replace("/admin/", "");
  useEffect(() => {
    let filtered = posts.filter(post => post.status === path);
    setDisplayPosts(filtered);
  }, [path, posts]);

  return (
    <div className="post-list-container">
      <div className="post-list-title">
        <h3>Posts</h3>
      </div>
      <div className="post-list">
        <TransitionGroup>
          {displayPosts.map(post => {
            return (
              <CSSTransition key={post.id} timeout={200} classNames="item">
                <PostItem post={post} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default PostsList;
