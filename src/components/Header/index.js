import React from "react";
import { MainMenu, Logo, ThemeToggler } from "../";
import "./header.style.css";

const mainMenuItems = [
  { text: "New", url: "https://news.ycombinator.com/newest" },
  { text: "Show", url: "https://news.ycombinator.com/show" },
  { text: "Submit", url: "https://news.ycombinator.com/submit" }
];

const Header = () => (
  <header className="page-header">
    <div className="page-header__primary">
      <Logo />
    </div>
    <div className="page-header__secondary">
      <ThemeToggler />
      <MainMenu menuItems={mainMenuItems} />
    </div>
  </header>
);

export default Header;
