import React from "react";
import AdditionalMenu from "../AdditionalMenu";
import "./footer.style.css";

const additionalMenuItems = [
  { text: "Pure UI", url: "https://rauchg.com/2015/pure-ui" },
  { text: "Documentation", url: "https://reactjs.org/docs/" },
  {
    text: "PropTypes",
    url: "https://reactjs.org/docs/typechecking-with-proptypes.html"
  },
  {
    text: "Create react app",
    url: "https://github.com/facebook/create-react-app/"
  },
  { text: "github", url: "https://github.com/user/repo" }
];

const Footer = props => (
  <footer className="page-footer">
    <AdditionalMenu menuItems={additionalMenuItems} />
  </footer>
);

export default Footer;
