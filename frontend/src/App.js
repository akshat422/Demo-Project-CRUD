import React from "react";
import Header from "./Components/Layout/Header.js"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Home from "./Components/Layout/Home.js";

function App() {
  return (
    <>
      <Router>
        <Header/>
          <Switch>
          <Route exact path="/" component={Home}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
