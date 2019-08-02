import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import "./App.css";

function HatsPage(props) {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
