import React from "react";
import "./DateString.scss";
import PropTypes from "prop-types";

// Import momentjs
import moment from "moment";
import "moment/locale/vi";

// import custom icons
import { MdDateRange } from "react-icons/md";

const DateString = ({ dateCreated }) => {
  const m = moment(Number(dateCreated)).calendar();
  console.log(m);

  return (
    <span className="date-string">
      <MdDateRange size={24} />
      <span>{m}</span>
    </span>
  );
};

DateString.propTypes = {
  dateCreated: PropTypes.string.isRequired
};

export default DateString;
