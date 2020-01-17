import React, { useContext, useState } from "react";

// Import custom components
import EditPostHeader from "../components/PostEditor/EditPostHeader/EditPostHeader";
import Editor from "../components/DraftEditor/Editor";
import SmallBoxContainer from "../components/stateless/SmallBoxContainer/SmallBoxContainer";
import HeadingInputForm from "../components/PostEditor/HeadingInputForm/HeadingInputForm";

// Import context
import PostContext from "../context/postContext/postContext";

const uuidv1 = require("uuid/v1");

const NewPost = props => {
  //
  const postContext = useContext(PostContext);

  //
  const [postMeta, setPostMeta] = useState({
    id: "",
    title: "",
    dateCreated: "",
    dateUpdated: "",
    content: ""
  });

  //
  const submitHandler = () => {
    if (postMeta.title === "" || postMeta.content === "") {
      alert("Empty");
      return;
    }

    postContext.createNewPost(postMeta);
    console.log(postMeta);
  };

  const onTitleChangeHandler = title => {
    let now = new Date().toTimeString();

    let newId;
    if (postMeta.id === "") {
      newId = uuidv1();
    } else {
      newId = postMeta.id;
    }

    if (postMeta.dateCreated === "") {
      console.log("new date");
      setPostMeta({
        ...postMeta,
        title: title,
        dateCreated: now,
        id: newId,
        status: "published"
      });
    } else {
      console.log("update date");
      setPostMeta({
        ...postMeta,
        title: title,
        dateUpdated: now,
        id: newId,
        status: "published"
      });
    }
  };

  const onContentSavedHandler = contentString => {
    setPostMeta({ ...postMeta, content: contentString });
  };

  return (
    <div className="white-bg">
      <EditPostHeader submitHandler={submitHandler} />
      <SmallBoxContainer whiteBackground>
        <HeadingInputForm
          onTitleChangeHandler={onTitleChangeHandler}
          postMeta={postMeta}
        />
        <Editor onContentSavedHandler={onContentSavedHandler} />
      </SmallBoxContainer>
    </div>
  );
};

export default NewPost;
