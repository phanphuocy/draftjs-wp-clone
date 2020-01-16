import React from "react";

// Import custom components
import EditPostHeader from "../components/EditPost/EditPostHeader/EditPostHeader";
import Editor from "../components/Editor/Editor";
import SmallBoxContainer from "../components/stateless/SmallBoxContainer/SmallBoxContainer";
import HeadingInputForm from "../components/EditPost/HeadingInputForm/HeadingInputForm";

const NewPost = props => {
  const { createNewPost } = props;
  return (
    <div className="white-bg">
      <EditPostHeader createNewPost={createNewPost} />
      <SmallBoxContainer whiteBackground>
        <HeadingInputForm />
        <Editor />
      </SmallBoxContainer>
    </div>
  );
};

export default NewPost;
