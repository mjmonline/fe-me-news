import React, { Component } from "react";
import { NewsItemList, RefreshButton } from "../";
import { api } from "../../utils";

const isArraysEqual = (arr1 = [], arr2 = []) =>
  arr1.toString() === arr2.toString();

class PageNewsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ids: undefined,
      refreshing: false
    };

    this.refresh = this.refresh.bind(this);
  }

  getIds() {
    api
      .getItemsIds()
      .then(ids => {
        this.setState({ ids, refreshing: false });
      })
      .catch(err => {
        console.error(err);
      });
  }

  refresh() {
    this.setState({ refreshing: true }, this.getIds);
  }

  componentDidMount() {
    this.getIds();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.refreshing !== nextState.refreshing) {
      return true;
    }

    if (!isArraysEqual(this.state.ids, nextState.ids)) {
      return true;
    }

    return false;
  }

  render() {
    const { ids, refreshing } = this.state;

    if (!ids) {
      return <div>Loading…</div>;
    }
    return (
      <div>
        <RefreshButton clickHandler={this.refresh} refreshing={refreshing} />
        <NewsItemList ids={ids} />
      </div>
    );
  }
}

export default PageNewsList;
