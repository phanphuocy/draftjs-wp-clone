import React from "react";
import "./TitleForm.scss";

// Import custom components
import TextareaAutosize from "react-autosize-textarea";

const TitleForm = props => {
  //
  const { title, onTitleChangeHandler } = props;
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
        value={title}
        rows={1}
        name="title"
        onChange={onChangeHandler}
      />
    </form>
  );
};

export default TitleForm;
