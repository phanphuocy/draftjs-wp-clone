import React, { useContext } from "react";
import "./PostOptionGroup.scss";

// Import custom icons

// Import context
import PostContext from "../../../context/postContext/postContext";
import { useHistory } from "react-router-dom";

const PostOptionGroup = props => {
  // PostOptionGroup uses two kind of props
  // one is the post from its calling parents..
  let { post } = props;

  // ..and second is the method got from context API
  const postContext = useContext(PostContext);
  const {
    deleteSelectedPost,
    draftSelectedPost,
    setExistedEditing
  } = postContext;

  let history = useHistory();

  // Navigate to post edit page when click edit button
  const navigateToEdit = post => {
    setExistedEditing(post);
    history.push("/admin/edit-post/" + post._id);
  };

  return (
    <div className="post-option-button-group">
      <button onClick={() => navigateToEdit(post)}>Edit</button>
      <button onClick={() => deleteSelectedPost(post)}>Delete</button>
      {post.status !== "draft" && (
        <button onClick={() => draftSelectedPost(post)}>2Draft</button>
      )}
    </div>
  );
};

export default PostOptionGroup;
