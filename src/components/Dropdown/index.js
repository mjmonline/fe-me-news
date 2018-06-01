import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ options, defaultValue, changeHandler }) => {
  return (
    <select onChange={changeHandler} value={defaultValue}>
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.number.isRequired,
  changeHandler: PropTypes.func
};

export default Dropdown;
