import React from "react";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Categories from "./components/Pages/Categories";
import Exchanges from "./components/Pages/Exchanges";
import News from "./components/Pages/News";
import Trending from "./components/Pages/Trending";
import CryptoInfo from "./components/CryptoInfo";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/categories" component={Categories} />
          <Route path="/exchanges" component={Exchanges} />
          <Route path="/news" component={News} />
          <Route path="/trending" component={Trending} />
          <Route path="/info/:coinId" component={CryptoInfo} />
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
