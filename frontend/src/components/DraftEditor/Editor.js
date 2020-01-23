import React, { useState, useEffect } from "react";
import "./Editor.scss";
import { EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js";
import Editor from "draft-js-plugins-editor";

import debounce from "lodash/debounce";

// Import custom plugins
import createHighlightPlugin from "./plugins/highlightPlugin";

// Import custom components
import EditorToolbar from "./EditorToolbar/EditorToolbar";

function MyEditor(props) {
  const { onContentChangeHandler, post } = props;

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  console.log(editorState);

  useEffect(() => {
    if (post.content) {
      console.log(JSON.parse(post.content));
      const convertedContentState = convertFromRaw(JSON.parse(post.content));
      setEditorState(EditorState.createWithContent(convertedContentState));
    }
  }, []);

  //
  const highlightPlugin = createHighlightPlugin();

  const plugins = [highlightPlugin];

  const saveContentToString = debounce(raw => {
    onContentChangeHandler(JSON.stringify(raw));
  }, 1000);

  const onChangeHandler = state => {
    const contentState = state.getCurrentContent();

    saveContentToString(convertToRaw(contentState));

    setEditorState(state);
  };

  // handle Ricktext commands
  const handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChangeHandler(newState);
      return "handled";
    }
    return "not-handled";
  };

  const toggleInlineStyle = command => {
    const newState = RichUtils.toggleInlineStyle(editorState, command);
    if (newState) {
      onChangeHandler(newState);
      return "handled";
    }
    return "not-handled";
  };

  const toggleItalic = () => {
    toggleInlineStyle("ITALIC");
  };

  const toggleBold = () => {
    toggleInlineStyle("BOLD");
  };

  const toggleUnderline = () => {
    toggleInlineStyle("UNDERLINE");
  };

  const toggleHighlight = () => {
    toggleInlineStyle("HIGHLIGHT");
  };

  return (
    <React.Fragment>
      <EditorToolbar
        toggleBold={toggleBold}
        toggleItalic={toggleItalic}
        toggleUnderline={toggleUnderline}
        toggleHighlight={toggleHighlight}
      />
      <Editor
        editorState={editorState}
        onChange={onChangeHandler}
        handleKeyCommand={handleKeyCommand}
        plugins={plugins}
      />
    </React.Fragment>
  );
}

export default MyEditor;
