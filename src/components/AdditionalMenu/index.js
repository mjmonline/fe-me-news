import React from "react";
import PropTypes from "prop-types";
import AdditionalMenuItem from "../AdditionalMenuItem";
import "./additionalMenu.style.css";

const AdditionalMenu = ({ menuItems }) => (
  <ul className="additional-menu">
    {menuItems.map((item, i) => (
      <AdditionalMenuItem key={i} text={item.text} url={item.url} />
    ))}
  </ul>
);

AdditionalMenu.propTypes = {
  menuItems: PropTypes.array.isRequired
};

export default AdditionalMenu;
