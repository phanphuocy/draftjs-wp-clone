import React, { useEffect, useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import "./PostsList.scss";
import Img from "react-image";

// Import routers
import { Link, useLocation } from "react-router-dom";

// Import custom components
import PostOptionGroup from "../PostOptionGroup/PostOptionGroup";

const PostItem = props => {
  let { date, title, thumbnailUrl, postId } = props;
  return (
    <div className="post-list-item">
      <div className="post-item-left">
        <h3 className="post-item-title">
          <Link to={"/admin/edit-post/" + postId}>{title}</Link>
        </h3>
        <span className="post-item-date">{date}</span>
      </div>
      <div className="post-item-right">
        <Img src={process.env.PUBLIC_URL + thumbnailUrl} width={100} />
        <PostOptionGroup
          postId={props.postId}
          editSelectPost={props.editSelectPost}
          deleteSelectedPost={props.deleteSelectedPost}
          draftSelectedPost={props.draftSelectedPost}
        />
      </div>
    </div>
  );
};

const PostsList = props => {
  let {
    postData,
    editSelectPost,
    deleteSelectedPost,
    draftSelectedPost
  } = props;

  const [displayPosts, setDisplayPosts] = useState([]);

  let path = useLocation().pathname.replace("/admin/", "");

  const changeDisplayList = () => {
    let filtered = postData.filter(post => post.status === path);
    setDisplayPosts(filtered);
  };

  // Try to render as the path changed
  useEffect(() => {
    console.log("useEffect");
    let filtered = postData.filter(post => post.status === path);
    setDisplayPosts(filtered);
  }, [path]);

  // Try to re-render as the postData props (which is not works by useEffect...
  // .. due to useEffect() is shallow comparing
  useDeepCompareEffect(() => {
    console.log("useDeepEffect");
    let filtered = postData.filter(post => post.status === path);
    setDisplayPosts(filtered);
  }, [props.postData]);

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
              postId={post.id}
              title={post.title}
              date={post.dateUpdated}
              thumbnailUrl={post.thumbnailUrl}
              editSelectPost={editSelectPost}
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
