import React from "react";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import {HashRouter, Route, Router, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Navigation />
          <Switch>
              <Route exact="/">
                  <Home />
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
