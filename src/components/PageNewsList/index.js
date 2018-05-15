import React from "react";
import PropTypes from "prop-types";
import { NewsItemList } from "../";
import { api } from "../../utils";

const PageNewsList = props => {
  return <NewsItemList ids={api.getItemsIds()} />;
};

PageNewsList.propTypes = {};

export default PageNewsList;
