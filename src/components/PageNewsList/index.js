import React, { Component } from "react";
import { NewsItemList, RefreshButton } from "../";

import * as actions from "../../actions";
import { connect } from "react-redux";

const isArraysEqual = (arr1 = [], arr2 = []) =>
  arr1.toString() === arr2.toString();

const firstN = (n, arr) => arr.slice(0, n);

class PageNewsList extends Component {
  componentDidMount() {
    this.props.fetchItemIds();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!isArraysEqual(this.props.ids, nextProps.ids)) {
      return true;
    }

    return false;
  }

  render() {
    const { ids, fetchItemIds, isLoading } = this.props;

    if (!ids) {
      return <div>Loading…</div>;
    }

    return (
      <div>
        <RefreshButton clickHandler={fetchItemIds} disable={isLoading} />
        <NewsItemList ids={ids} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ids: firstN(state.ui.itemsToShow, state.data.itemsIds.ids),
    isLoading: state.data.itemsIds.isLoading
  };
};

const mapDispatchToProps = {
  fetchItemIds: actions.fetchItemIds
};

export default connect(mapStateToProps, mapDispatchToProps)(PageNewsList);
