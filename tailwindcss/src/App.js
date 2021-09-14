import React from "react";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Categories from "./components/Pages/Categories";
import Exchanges from "./components/Pages/Exchanges";
import News from "./components/Pages/News";
import Trending from "./components/Pages/Trending";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/exchanges">
            <Exchanges />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/trending">
            <Trending />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
