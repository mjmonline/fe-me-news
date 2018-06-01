import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({ options, changeHandler }) => {
  return (
    <select onChange={changeHandler}>
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
  changeHandler: PropTypes.func
};

export default Dropdown;
