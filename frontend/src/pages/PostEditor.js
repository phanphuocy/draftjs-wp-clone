import React, { useContext, useState, useEffect } from "react";

// Import custom components
import EditPostHeader from "../components/PostEditor/EditPostHeader/EditPostHeader";
import Editor from "../components/DraftEditor/Editor";
import SmallBoxContainer from "../components/stateless/SmallBoxContainer/SmallBoxContainer";
import HeadingInputForm from "../components/PostEditor/HeadingInputForm/HeadingInputForm";

// Import context
import PostContext from "../context/postContext/postContext";

// Import router
import { useParams, useHistory } from "react-router-dom";

const uuidv1 = require("uuid/v1");

const PostEditor = props => {
  // Declare route's param, if postIdSlug is available, it's old post. Else, it's new post
  let { postIdSlug } = useParams();

  // Access to global props
  const postContext = useContext(PostContext);
  const { posts } = postContext;

  // Create an empty state for currently editing post
  const [postMeta, setPostMeta] = useState({
    id: "",
    title: "",
    dateCreated: "",
    dateUpdated: "",
    content: ""
  });

  // Create an state to store indicator whether post is new
  const [isNew, setIsNew] = useState(true);

  // Define history for routing
  const history = useHistory();

  useEffect(() => {
    if (postIdSlug) {
      let editPost = posts.find(post => post.id === postIdSlug);
      if (!editPost) {
        console.log("the id is not available: 404.");
        history.push("/404");
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

export default PostEditor;
