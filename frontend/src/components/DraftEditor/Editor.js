import React, { useState, useEffect } from "react";
import "./Editor.scss";
import { Editor, EditorState, convertToRaw } from "draft-js";

function MyEditor(props) {
  const { onContentSavedHandler } = props;

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // console.log(editorState);

  // useEffect(() => {
  //   if (props.postMeta.content) {
  //     console.log("therer something in herer");
  //   } else {
  //     console.log("no content");
  //   }
  // });

  const saveContentToString = raw => {
    console.log("string", JSON.stringify(raw));
    onContentSavedHandler(JSON.stringify(raw));
  };

  const onChangeHandler = state => {
    const contentState = state.getCurrentContent();
    saveContentToString(convertToRaw(contentState));

    setEditorState(state);
  };

  return <Editor editorState={editorState} onChange={onChangeHandler} />;
}

export default MyEditor;
