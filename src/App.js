import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Newsdisplay from "./components/Newsdisplay";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apikey = process.env.REACT_APP_API;
  // const apikey = "dbe57b028aeb41e285a226a94865f7a7";

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={progress}
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
              apikey={apikey}
              category="general"
              setProgress={setProgress}
            />
          </Route>
          <Route exact path="/entertainment">
            <Newsdisplay
              key="entertainment"
              apikey={apikey}
              setProgress={setProgress}
              category="entertainment"
            />
          </Route>
          <Route exact path="/health">
            <Newsdisplay
              key="health"
              setProgress={setProgress}
              apikey={apikey}
              category="health"
            />
          </Route>
          <Route exact path="/business">
            <Newsdisplay
              key="business"
              setProgress={setProgress}
              apikey={apikey}
              category="business"
            />
          </Route>
          <Route exact path="/science">
            <Newsdisplay
              key="science"
              setProgress={setProgress}
              apikey={apikey}
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <Newsdisplay
              key="sports"
              setProgress={setProgress}
              apikey={apikey}
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <Newsdisplay
              key="technology"
              setProgress={setProgress}
              apikey={apikey}
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
