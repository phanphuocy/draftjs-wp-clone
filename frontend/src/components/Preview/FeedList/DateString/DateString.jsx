import React from "react";
import "./DateString.scss";
import PropTypes from "prop-types";

// import custom icons
import { MdDateRange } from "react-icons/md";

const DateString = ({ dateUpdated }) => {
  // Month array
  const monthArray = [
    "Tháng Một",
    "Tháng Hai",
    "Tháng Ba",
    "Tháng Tư",
    "Tháng Năm",
    "Tháng Sáu",
    "Tháng Bảy",
    "Tháng Tám",
    "Tháng Chín",
    "Tháng Mười",
    "Tháng Mười Một",
    "Tháng Mười Hai"
  ];
  let date = new Date(dateUpdated);
  let day, month, year;
  if (date) {
    day = date.getUTCDate();
    month = monthArray[date.getUTCMonth()];
    year = date.getUTCFullYear();
  }

  return (
    <span className="date-string">
      <MdDateRange size={24} />
      {`${month}, ${day} ${year}`}
    </span>
  );
};

DateString.propTypes = {
  dateUpdated: PropTypes.string.isRequired
};

export default DateString;
