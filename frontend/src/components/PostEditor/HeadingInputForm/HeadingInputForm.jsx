import React, { useState } from "react";
import "./HeadingInputForm.scss";

// Import custom components
import TextareaAutosize from "react-autosize-textarea";

const HeadingInputForm = props => {
  //
  const { postMeta, onTitleChangeHandler } = props;
  //
  const onChangeHandler = e => {
    console.log(e.target.value);
    onTitleChangeHandler(e.target.value);
  };
  //
  return (
    <form className="heading-form">
      <TextareaAutosize
        type="text"
        placeholder="Tựa đề"
        value={postMeta.title}
        rows={1}
        name="title"
        onChange={onChangeHandler}
      />
    </form>
  );
};

export default HeadingInputForm;
