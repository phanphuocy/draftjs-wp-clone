import React from "react";
import "./HeadingInputForm.scss";

// Import custom components
import TextareaAutosize from "react-autosize-textarea";

const HeadingInputForm = () => {
  return (
    <form className="heading-form">
      <TextareaAutosize type="text" placeholder="Tựa đề" rows={1} />
    </form>
  );
};

export default HeadingInputForm;
