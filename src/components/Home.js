import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
export default class Home extends Component {
  constructor() {
    super();
    document.title = "NewsFunki-Home";
  }
  render() {
    return (
      <div>
        <div className="container containerHome ">
          <h1 className="text-center text-primary">सत्यमेव जयते</h1>
          <div className="row mainHome">
            <div className="col-md-3 homePart">
              <Link to="/general" className="card cardHome">
                <span className="text-primary">general</span>
              </Link>
            </div>
            <div className="col-md-3 homePart">
              <Link to="/entertainment" className="card cardHome">
                <span className="text-primary">Entertainment</span>
              </Link>
            </div>
            <div className="col-md-3 homePart">
              <Link to="/health" className="card cardHome">
                <span className="text-primary">Health</span>
              </Link>
            </div>
            <div className="col-md-3 homePart">
              <Link to="/business" className="card cardHome">
                <span className="text-primary">Buisness</span>
              </Link>
            </div>
            <div className="col-md-3 homePart">
              <Link to="/science" className="card cardHome">
                <span className="text-primary">Science</span>
              </Link>
            </div>
            <div className="col-md-3 homePart">
              <Link to="/sports" className="card cardHome">
                <span className="text-primary">Sports</span>
              </Link>
            </div>
            <div className="col-md-3 homePart">
              <Link to="/technology" className="card cardHome">
                <span className="text-primary">Technology</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
