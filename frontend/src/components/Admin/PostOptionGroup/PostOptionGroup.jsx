import React from "react";
import "./PostOptionGroup.scss";

// Import custom icons

const PostOptionButtonGroup = props => {
  return (
    <div className="post-option-button-group">
      <button onClick={() => props.editSelectPost(props.postId)}>Edit</button>
      <button onClick={() => props.deleteSelectedPost(props.postId)}>
        Delete
      </button>
      <button onClick={() => props.draftSelectedPost(props.postId)}>
        2Draft
      </button>
    </div>
  );
};

const PostOptionGroup = props => {
  let { postId } = props;
  return (
    <PostOptionButtonGroup
      postId={postId}
      editSelectPost={props.editSelectPost}
      deleteSelectedPost={props.deleteSelectedPost}
      draftSelectedPost={props.draftSelectedPost}
    />
  );
};

export default PostOptionGroup;
