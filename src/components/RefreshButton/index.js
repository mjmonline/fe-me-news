import React from "react";
import PropTypes from "prop-types";
import "./refreshButton.style.css";

const RefreshButton = ({ clickHandler, refreshing }) => {
  return (
    <button
      className="refresh-button"
      onClick={clickHandler}
      disabled={refreshing}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 100 100"
        x="0px"
        y="0px"
      >
        <path
          fill="currentColor"
          d="M47.3,87.8a29.7,29.7,0,0,0,4.2.3c17.1,0,29.7-11.6,34.8-23.9l-7.4-3.1C74.5,71.7,63.3,81.5,48.1,79.9a28.7,28.7,0,0,1-20.4-12,31.4,31.4,0,0,1-5.9-20.8c1.4-12.4,13.5-28.4,32.8-26.3A30.3,30.3,0,0,1,74.4,31.7H58.2v8H86V11.9H78V23.7A38.4,38.4,0,0,0,55.5,12.8C33.1,10.4,15.9,28.1,13.9,46.2a38.3,38.3,0,0,0,7.3,26.3A36.4,36.4,0,0,0,47.3,87.8Z"
        />
      </svg>
    </button>
  );
};

RefreshButton.propTypes = {
  refreshing: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default RefreshButton;
