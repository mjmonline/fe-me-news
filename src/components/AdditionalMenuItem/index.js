import React from "react";
import PropTypes from "prop-types";
import "./additionalMenuItem.style.css";

const AdditionalMenuItem = ({ text, url }) => (
  <li className="additional-menu-item">
    <a href={url}>{text}</a>
  </li>
);

AdditionalMenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default AdditionalMenuItem;
