import React, { useContext } from "react";
import "./PostOptionGroup.scss";

// Import custom icons

// Import context
import PostContext from "../../../context/postContext/postContext";
import { useHistory } from "react-router-dom";

const PostOptionButtonGroup = ({ post }) => {
  const postContext = useContext(PostContext);
  const { deleteSelectedPost, draftSelectedPost } = postContext;

  let history = useHistory();

  // Navigate to post edit page when click edit button
  const navigateToEdit = postId => {
    history.push("/admin/edit-post/" + postId);
  };

  return (
    <div className="post-option-button-group">
      <button onClick={() => navigateToEdit(post.id)}>Edit</button>
      <button onClick={() => deleteSelectedPost(post)}>Delete</button>
      {post.status !== "draft" && (
        <button onClick={() => draftSelectedPost(post)}>2Draft</button>
      )}
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
