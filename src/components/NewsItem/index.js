import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import PropTypes from "prop-types";
import { distanceInWordsToNow } from "date-fns";
import { Link } from "react-router-dom";
import { api } from "../../utils";
import "./newsItem.style.css";

class NewsItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: undefined
    };
  }

  componentDidMount() {
    api.getItem(this.props.id).then(data => {
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;
    if (!data) {
      return null;
    }
    const dateTime = new Date(data.time * 1000);
    const relativeTime = distanceInWordsToNow(dateTime);

    return (
      <div className="newsItem">
        <a href={data.url}>
          <h2 className="newsItem-heading">{data.title}</h2>
        </a>
        <div className="newsItem-meta">
          <Link to={`/item/${data.id}`}>
            <span className="newsItem-meta-item">{data.score} points</span>
          </Link>
          <span className="newsItem-meta-item">by {data.by}</span>
          <Link to={`/item/${data.id}`}>
            <span className="newsItem-meta-item">
              <time dateTime={dateTime}>{relativeTime} ago</time>
            </span>
            <span className="newsItem-meta-item">
              {data.descendants === 0
                ? "discuss"
                : data.descendants + " comments"}
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

NewsItem.propTypes = {
  // id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  id: PropTypes.number.isRequired
};

// const mapDispatchToProps = {
//   fetchItem
// };

const mapDispatchToProps = dispatch => {
  return {
    // fetchItem: id => dispatch(action.fetchItem(dispatch)(id))
    fetchItem: actions.fetchItem(dispatch)
  };
};

export default connect(null, mapDispatchToProps)(NewsItem);
