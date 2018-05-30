import React from "react";
import { connect } from "react-redux";
import { toggleTheme } from "../../actions";
import MainMenu from "../MainMenu";
import Logo from "../Logo";
import "./header.style.css";

const mainMenuItems = [
  { text: "New", url: "https://news.ycombinator.com/newest" },
  { text: "Show", url: "https://news.ycombinator.com/show" },
  { text: "Submit", url: "https://news.ycombinator.com/submit" }
];

const Header = props => (
  <header className="page-header">
    <Logo />
    <button onClick={props.toggleTheme}>toggle theme</button>
    <MainMenu menuItems={mainMenuItems} />
  </header>
);

const mapDispatchToProps = {
  toggleTheme
};

export default connect(null, mapDispatchToProps)(Header);
