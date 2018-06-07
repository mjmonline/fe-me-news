import React, { Component } from "react";
import { connect } from "react-redux";
import * as ducks from "../../ducks";
import PropTypes from "prop-types";
import { distanceInWordsToNow } from "date-fns";
import { Link } from "react-router-dom";
import "./newsItem.style.css";

class NewsItem extends Component {
  componentDidMount() {
    this.props.fetchItem(this.props.id);
  }

  render() {
    const { item } = this.props;
    if (!item) {
      return null;
    }
    const dateTime = new Date(item.time * 1000);
    const relativeTime = distanceInWordsToNow(dateTime);

    return (
      <div className="newsItem">
        <a href={item.url}>
          <h2 className="newsItem-heading">{item.title}</h2>
        </a>
        <div className="newsItem-meta">
          <Link to={`/item/${item.id}`}>
            <span className="newsItem-meta-item">{item.score} points</span>
          </Link>
          <span className="newsItem-meta-item">by {item.by}</span>
          <Link to={`/item/${item.id}`}>
            <span className="newsItem-meta-item">
              <time dateTime={dateTime}>{relativeTime} ago</time>
            </span>
            <span className="newsItem-meta-item">
              {item.descendants === 0
                ? "discuss"
                : item.descendants + " comments"}
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

NewsItem.propTypes = {
  id: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    item: ducks.data.selectors.items.item(state, ownProps.id)
  };
};

const mapDispatchToProps = {
  fetchItem: ducks.data.actions.fetchItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsItem);
