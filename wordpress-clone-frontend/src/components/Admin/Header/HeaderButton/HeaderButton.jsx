import React from "react";
import PropTypes from "prop-types";
import "./HeaderButton.scss";

const HeaderButton = props => {
  const { buttonName, buttonIcon } = props;
  return (
    <button className="HeaderButton">
      {buttonIcon}
      <span>{buttonName}</span>
    </button>
  );
};

HeaderButton.propTypes = {};

export default HeaderButton;
