import React from "react";
import PropTypes from "prop-types";
import "./page.style.css";

const Page = ({ children }) => <div className="page">{children}</div>;

Page.propTypes = {
  children: PropTypes.node
};

export default Page;
