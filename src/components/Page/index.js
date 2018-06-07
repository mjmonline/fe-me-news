import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as ducks from "../../ducks";
import "./page.style.css";

const Page = ({ children, isDarkTheme }) => (
  <div className={`${isDarkTheme ? "page page--dark" : "page"}`}>
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.node,
  isDarkTheme: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    isDarkTheme: ducks.ui.selectors.isDarkTheme(state)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Page)
);
