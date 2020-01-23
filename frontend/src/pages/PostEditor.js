import React, { useContext, useState, useEffect } from "react";

// Import custom components
import EditPostHeader from "../components/PostEditor/EditPostHeader/EditPostHeader";
import Editor from "../components/DraftEditor/Editor";
import SmallBoxContainer from "../components/stateless/SmallBoxContainer/SmallBoxContainer";
import TitleForm from "../components/PostEditor/TitleForm/TitleForm";

// Import context
import PostContext from "../context/postContext/postContext";

// Import router
import { useParams, useHistory } from "react-router-dom";

import _ from "lodash";

const uuidv1 = require("uuid/v1");

const PostEditor = props => {
  // Declare route's param, if postIdSlug is available, it's old post. Else, it's new post
  let { postIdSlug } = useParams();

  console.log("postIdSlug", postIdSlug);

  // Access to global props
  const postContext = useContext(PostContext);
  const {
    posts,
    editing,
    updateEditing,
    editSelectedPost,
    createNewPost
  } = postContext;

  // Define history for routing
  const history = useHistory();

  // Check for valid id slug
  useEffect(() => {
    if (postIdSlug) {
      let editPost = posts.find(post => post._id === postIdSlug);
      if (!editPost) {
        console.log("the id is not available: 404.");
        history.push("/404");
      }
    }
  }, []);

  //
  const submitHandler = () => {
    console.log("Submit button clicked");
    if (!editing.isNew) {
      editSelectedPost(editing);
    } else {
      createNewPost(editing);
    }
  };

  const onTitleChangeHandler = titleNewValue => {
    let clone = { ...editing };
    clone.title = titleNewValue;
    updateEditing(clone);
  };

  const onContentChangeHandler = contentString => {
    let clone = { ...editing };
    clone.content = contentString;
    updateEditing(clone);
  };

  return (
    <div className="white-bg">
      <EditPostHeader
        submitHandler={submitHandler}
        postLength={posts.length}
        isNew={editing.isNew}
      />
      <SmallBoxContainer whiteBackground>
        <TitleForm
          onTitleChangeHandler={onTitleChangeHandler}
          title={editing.title}
        />
        <Editor
          onContentChangeHandler={onContentChangeHandler}
          post={editing}
        />
      </SmallBoxContainer>
    </div>
  );
};

export default PostEditor;
