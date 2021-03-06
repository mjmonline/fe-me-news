import React, { Component } from "react";
import { connect } from "react-redux";
import { NewsItemList, RefreshButton, Dropdown } from "../";
import { isArraysEqual, firstN } from "../../utils";
import * as ducks from "../../ducks";
import "./pageNewsList.style.css";

class PageNewsList extends Component {
  componentDidMount() {
    this.props.fetchItemsIds();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!isArraysEqual(this.props.ids, nextProps.ids)) {
      return true;
    }

    if (this.props.isLoading !== nextProps.isLoading) {
      return true;
    }

    return false;
  }

  render() {
    const {
      ids,
      fetchItemsIds,
      updateItemsToShow,
      isLoading,
      itemsToShow
    } = this.props;
    const options = [
      { value: 10, label: "Show 10" },
      { value: 20, label: "Show 20" },
      { value: 30, label: "Show 30" }
    ];

    if (!ids) {
      return <div>Loading…</div>;
    }

    return (
      <div>
        <div className="tools">
          <RefreshButton clickHandler={fetchItemsIds} disable={isLoading} />
          <Dropdown
            options={options}
            defaultValue={itemsToShow}
            changeHandler={e => {
              updateItemsToShow(parseInt(e.currentTarget.value, 10));
            }}
          />
        </div>
        <NewsItemList ids={ids} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const n = ducks.ui.selectors.itemsToShow(state);
  return {
    ids: firstN(n, ducks.data.itemsIds.selectors.ids(state)),
    isLoading: ducks.data.itemsIds.selectors.isLoading(state),
    itemsToShow: ducks.ui.selectors.itemsToShow(state)
  };
};

const mapDispatchToProps = {
  fetchItemsIds: ducks.data.itemsIds.actions.fetchItemsIds,
  updateItemsToShow: ducks.ui.actions.updateItemsToShow
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageNewsList);
