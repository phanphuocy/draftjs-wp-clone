import React from "react";

// Import custom components
import EditPostHeader from "../components/EditPost/EditPostHeader/EditPostHeader";

const EditPost = props => {
  return (
    <React.Fragment>
      <EditPostHeader />
      <h1>This is edit post page</h1>
    </React.Fragment>
  );
};

export default EditPost;
