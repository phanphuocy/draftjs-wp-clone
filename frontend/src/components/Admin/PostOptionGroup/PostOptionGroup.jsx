import React from "react";
import "./PostOptionGroup.scss";

// Import custom icons

const PostOptionButtonGroup = props => {
  return (
    <div className="post-option-button-group">
      <button onClick={() => props.editSelectedPost(props.post)}>Edit</button>
      <button onClick={() => props.deleteSelectedPost(props.post)}>
        Delete
      </button>
      <button onClick={() => props.draftSelectedPost(props.post)}>
        2Draft
      </button>
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
