import React, { useContext } from "react";
import "./PostOptionGroup.scss";

// Import custom icons

// Import context
import PostContext from "../../../context/postContext/postContext";

const PostOptionButtonGroup = ({ post }) => {
  const postContext = useContext(PostContext);
  const {
    editSelectedPost,
    deleteSelectedPost,
    draftSelectedPost
  } = postContext;
  return (
    <div className="post-option-button-group">
      <button onClick={() => editSelectedPost(post)}>Edit</button>
      <button onClick={() => deleteSelectedPost(post)}>Delete</button>
      <button onClick={() => draftSelectedPost(post)}>2Draft</button>
    </div>
  );
};

const PostOptionGroup = props => {
  let { post } = props;
  return (
    <PostOptionButtonGroup
      post={post}
      editSelectedPost={props.editSelectedPost}
      deleteSelectedPost={props.deleteSelectedPost}
      draftSelectedPost={props.draftSelectedPost}
    />
  );
};

export default PostOptionGroup;
