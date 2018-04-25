import React from "react";
import PropTypes from "prop-types";
import MainMenuItem from "../MainMenuItem";
import "./mainMenu.style.css";

const MainMenu = ({ menuItems }) => (
  <ul className="main-menu">
    {menuItems.map((item, i) => (
      <MainMenuItem key={i} text={item.text} url={item.url} />
    ))}
  </ul>
);

MainMenu.propTypes = {
  menuItems: PropTypes.array.isRequired
};

export default MainMenu;
