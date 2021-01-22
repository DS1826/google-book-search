import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";

import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <Router>
    <div>
    <Nav />
    <Jumbotron />
    <Wrapper>
      <Route exact path ="/" component={Search} />
      <Route exact path ="/search" component={Search} />
      <Route exact path ="/saved" component={Saved} />
      </Wrapper>
    </div>
    </Router>
  );
}

export default App;
