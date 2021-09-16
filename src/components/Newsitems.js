import React, { Component } from "react";
import "./Newsitems.css";

//class based component
export default class Newsitems extends Component {
  render() {
    let { itemTitle, itemDesc, itemImage, publish, newsUrl, author, source } =
      this.props;
    return (
      <div
        className="card border-primary cardNewsItem"
        style={{ height: "28rem" }}
      >
        <span className="position-absolute top-0 start-100 text-white translate-middle badge  bg-danger">
          {source}
        </span>
        <img src={itemImage} className="card-img-top imgNewsItem" alt="..." />
        <div className="card-body text-primary">
          <p className="card-text">
            <small className="text-muted">
              by {!author ? "unknown" : author} on{" "}
              {new Date(publish).toGMTString()}
            </small>
          </p>
          <h5 className="card-title">{itemTitle}</h5>
          <p className="card-text text-truncate">{itemDesc}</p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn  btn-primary fixed-bottom btnNewsItem"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}
