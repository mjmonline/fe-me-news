import React, { Component } from "react";
import { NewsItemList } from "../";
import { api } from "../../utils";

const isArraysEqual = (arr1, arr2) => arr1.toString() === arr2.toString();

class PageNewsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: undefined
    };
  }

  componentDidMount() {
    api.getItemsIds().then(data => {
      this.setState({ data });
    });
  }

  shouldComponetUpdate(nextProps, nextState) {
    return !isArraysEqual(this.state.data, nextState.data);
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return <div>Loading…</div>;
    }
    return (
      <div>
        <NewsItemList ids={this.state.data} />
      </div>
    );
  }
}

export default PageNewsList;
