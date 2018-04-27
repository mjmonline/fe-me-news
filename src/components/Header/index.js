import React from "react";
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
    <MainMenu menuItems={mainMenuItems} />
  </header>
);

export default Header;
