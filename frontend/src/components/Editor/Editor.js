import React, { useState } from "react";
import "./Editor.scss";
import { Editor, EditorState } from "draft-js";

function MyEditor() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  return <Editor editorState={editorState} onChange={setEditorState} />;
}

export default MyEditor;
