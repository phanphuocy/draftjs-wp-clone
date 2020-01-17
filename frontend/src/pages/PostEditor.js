import React, { useContext, useState, useEffect } from "react";

// Import custom components
import EditPostHeader from "../components/PostEditor/EditPostHeader/EditPostHeader";
import Editor from "../components/DraftEditor/Editor";
import SmallBoxContainer from "../components/stateless/SmallBoxContainer/SmallBoxContainer";
import HeadingInputForm from "../components/PostEditor/HeadingInputForm/HeadingInputForm";

// Import context
import PostContext from "../context/postContext/postContext";

// Import router
import { useParams } from "react-router-dom";

const uuidv1 = require("uuid/v1");

const NewPost = props => {
  //
  let { postIdSlug } = useParams();

  //
  const postContext = useContext(PostContext);

  //
  const { posts } = postContext;

  //
  const [postMeta, setPostMeta] = useState({
    id: "",
    title: "",
    dateCreated: "",
    dateUpdated: "",
    content: ""
  });

  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    if (postIdSlug) {
      let editPost = posts.find(post => post.id === postIdSlug);
      if (!editPost) {
        console.log("the id is not available: 404.");
        return;
      }
      setIsNew(false);
      setPostMeta(editPost);
    }
  }, []);

  //
  const submitHandler = () => {
    if (postMeta.title === "" || postMeta.content === "") {
      alert("Empty");
      return;
    }
    if (isNew) {
      postContext.createNewPost(postMeta);
    } else {
      postContext.editSelectedPost(postMeta);
    }
    console.log(postMeta);
  };

  const onTitleChangeHandler = titleNewValue => {
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
        title: titleNewValue,
        dateCreated: now,
        id: newId,
        status: "published"
      });
    } else {
      console.log("update date");
      setPostMeta({
        ...postMeta,
        title: titleNewValue,
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
      <EditPostHeader
        submitHandler={submitHandler}
        postLength={posts.length}
        isNew={isNew}
      />
      <SmallBoxContainer whiteBackground>
        <HeadingInputForm
          onTitleChangeHandler={onTitleChangeHandler}
          postMeta={postMeta}
        />
        <Editor
          onContentSavedHandler={onContentSavedHandler}
          postMeta={postMeta}
        />
      </SmallBoxContainer>
    </div>
  );
};

export default NewPost;
