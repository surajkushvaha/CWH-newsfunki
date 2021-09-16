import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Newsdisplay from "./components/Newsdisplay";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  // apikey = process.env.REACT_APP_API;
  state = { progress: 0 };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
            style={{ position: "absolute" }}
          />
          <Switch>
            <Route exact path="/">
              <Home key="home" category="home" />
            </Route>
            <Route exact path="/general">
              <Newsdisplay
                key="general"
                apikey={this.apikey}
                category="general"
                setProgress={this.setProgress}
              />
            </Route>
            <Route exact path="/entertainment">
              <Newsdisplay
                key="entertainment"
                apikey={this.apikey}
                setProgress={this.setProgress}
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <Newsdisplay
                key="health"
                setProgress={this.setProgress}
                apikey={this.apikey}
                category="health"
              />
            </Route>
            <Route exact path="/business">
              <Newsdisplay
                key="business"
                setProgress={this.setProgress}
                apikey={this.apikey}
                category="business"
              />
            </Route>
            <Route exact path="/science">
              <Newsdisplay
                key="science"
                setProgress={this.setProgress}
                apikey={this.apikey}
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <Newsdisplay
                key="sports"
                setProgress={this.setProgress}
                apikey={this.apikey}
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <Newsdisplay
                key="technology"
                setProgress={this.setProgress}
                apikey={this.apikey}
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
