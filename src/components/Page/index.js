import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./page.style.css";

const Page = ({ children, isDarkTheme }) => (
  <div className={`page ${isDarkTheme ? "page--dark" : ""}`}>{children}</div>
);

Page.propTypes = {
  children: PropTypes.node,
  isDarkTheme: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    isDarkTheme: state.ui.isDarkTheme
  };
};

export default connect(mapStateToProps, null)(Page);
