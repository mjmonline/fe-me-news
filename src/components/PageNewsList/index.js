import React, { Component } from "react";
import { NewsItemList, RefreshButton, Dropdown } from "../";
import "./pageNewsList.style.css";

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

    if (this.props.isLoading !== nextProps.isLoading) {
      return true;
    }

    if (this.props.updateItemsToShow !== nextProps.updateItemsToShow) {
      return true;
    }

    return false;
  }

  render() {
    const { ids, fetchItemIds, updateItemsToShow, isLoading } = this.props;
    const options = [
      { value: "10", label: "Show 10" },
      { value: "20", label: "Show 20" },
      { value: "30", label: "Show 30" }
    ];

    if (!ids) {
      return <div>Loading…</div>;
    }

    return (
      <div>
        <div className="tools">
          <RefreshButton clickHandler={fetchItemIds} disable={isLoading} />
          <Dropdown
            options={options}
            changeHandler={e => {
              updateItemsToShow(e.currentTarget.value);
            }}
          />
        </div>
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
  fetchItemIds: actions.fetchItemIds,
  updateItemsToShow: actions.updateItemsToShow
};

export default connect(mapStateToProps, mapDispatchToProps)(PageNewsList);
