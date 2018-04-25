import React from "react";
import PropTypes from "prop-types";
import "./mainMenuItem.style.css";

const MainMenuItem = ({ url, text }) => (
  <li className="main-menu-item">
    <a href={url} className="main-menu-item__link">
      {text}
    </a>
  </li>
);

MainMenuItem.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default MainMenuItem;
