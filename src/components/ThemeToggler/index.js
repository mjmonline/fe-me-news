import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import "./themeToggler.style.css";

const ThemeToggler = ({ toggleTheme, isDarkTheme }) => (
  <div>
    <button
      className={`theme-toggler ${isDarkTheme ? "is-active" : ""}`}
      onClick={toggleTheme}
    >
      <span
        className="theme-toggler__text theme-toggler__text--off"
        aria-hidden={isDarkTheme}
      >
        Dark
      </span>
      <span
        className="theme-toggler__text theme-toggler__text--on"
        aria-hidden={!isDarkTheme}
      >
        Light
      </span>
    </button>
  </div>
);

const mapStateToProps = state => {
  return {
    isDarkTheme: state.ui.isDarkTheme
  };
};

const mapDispatchToProps = {
  toggleTheme: actions.toggleTheme
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggler);
