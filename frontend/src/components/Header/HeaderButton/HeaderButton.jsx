import React from "react";
import PropTypes from "prop-types";
import "./HeaderButton.scss";

// Import router
import { NavLink } from "react-router-dom";

const HeaderButton = props => {
  const { buttonName, buttonIcon, url } = props;
  return (
    <NavLink to={url}>
      <button className="HeaderButton">
        {buttonIcon}
        <span>{buttonName}</span>
      </button>
    </NavLink>
  );
};

HeaderButton.propTypes = {
  buttonName: PropTypes.string.isRequired,
  buttonIcon: PropTypes.string,
  url: PropTypes.string.isRequired
};

export default HeaderButton;
