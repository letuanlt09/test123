import React from "react";
import "./App.css";
import Login from "./components/login.jsx";
import Success from "./components/success.jsx";
import Failed from "./components/failed";
import SignUp from "./components/signUp";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/success">
            <Success mess={"You successfully logined in."} />
          </Route>
          <Route path="/createSuccess">
            <Success mess="You successfully created an account." />
          </Route>
          <Route path="/failed" component={Failed} />
          <Route path="/signUp" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
