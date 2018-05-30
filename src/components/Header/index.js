import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import MainMenu from "../MainMenu";
import Logo from "../Logo";
import "./header.style.css";

const mainMenuItems = [
  { text: "New", url: "https://news.ycombinator.com/newest" },
  { text: "Show", url: "https://news.ycombinator.com/show" },
  { text: "Submit", url: "https://news.ycombinator.com/submit" }
];

const Header = ({ toggleTheme }) => (
  <header className="page-header">
    <Logo />
    <button onClick={toggleTheme}>toggle theme</button>
    <MainMenu menuItems={mainMenuItems} />
  </header>
);

const mapDispatchToProps = {
  toggleTheme: actions.toggleTheme
};

export default connect(null, mapDispatchToProps)(Header);
