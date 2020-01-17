// import { RichUtils } from "draft-js";

// export default () => {
//   return {
//     customStyleMap: {
//       HIGHLIGHT: "#fffe0d"
//     },
//     keyBindingFn: e => {
//       if (e.metaKey && e.key === "h") {
//         return "highlight";
//       }
//     },
//     handleKeyCommand: (command, editorState, { onChangeHandler }) => {
//       if (command === "highlight") {
//         onChangeHandler(RichUtils.toggleInlineStyle(editorState, "HIGHLIGHT"));
//         console.log("get to hightlight");
//         return true;
//       }
//     }
//   };
// };

import { RichUtils } from "draft-js";

export default () => {
  return {
    customStyleMap: {
      HIGHLIGHT: {
        background: "#fffe0d"
      }
    },
    keyBindingFn: e => {
      if (e.metaKey && e.key === "h") {
        console.log("binded key");
        return "highlight";
      }
    },
    handleKeyCommand: (command, editorState, { setEditorState }) => {
      if (command === "highlight") {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "HIGHLIGHT"));
        return true;
      }
    }
  };
};
