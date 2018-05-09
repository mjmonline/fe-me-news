import React, { Component } from "react";
import PropTypes from "prop-types";
import { NewsItem } from "../";
import "./newsItemList.style.css";

const NewsItemList = ({ ids }) => {
  return (
    <ol className="newsItemList">
      {ids.map(id => (
        <li key={id} className="newsItemList-item">
          <NewsItem id={id} />
        </li>
      ))}
    </ol>
  );
};

NewsItemList.propTypes = {
  ids: PropTypes.array.isRequired
};

export default NewsItemList;
