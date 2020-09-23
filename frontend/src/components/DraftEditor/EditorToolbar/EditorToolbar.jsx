import React from "react";
import "./EditorToolbar.scss";

// Import custom icons
import { MdFormatBold } from "react-icons/md";
import { MdFormatItalic } from "react-icons/md";
import { MdFormatUnderlined } from "react-icons/md";
import { MdBorderColor } from "react-icons/md";

const iconSize = 24;

const EditorToolbarButton = props => {
  const { icon, func } = props;
  return (
    <button
      className="editor-toolbar-button"
      onClick={() => {
        func();
      }}
    >
      {icon}
    </button>
  );
};

const EditorToolbar = props => {
  const { toggleBold, toggleItalic, toggleUnderline, toggleHighlight } = props;

  return (
    <div className="editor-toolbar">
      <EditorToolbarButton
        icon={<MdFormatBold size={iconSize} />}
        func={toggleBold}
      />
      <EditorToolbarButton
        icon={<MdFormatItalic size={iconSize} />}
        func={toggleItalic}
      />
      <EditorToolbarButton
        icon={<MdFormatUnderlined size={iconSize} />}
        func={toggleUnderline}
      />
      <EditorToolbarButton
        icon={<MdBorderColor size={iconSize - 4} />}
        func={toggleHighlight}
      />
    </div>
  );
};

export default EditorToolbar;
