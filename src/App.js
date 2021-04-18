import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Home from "./Home.js";
import Navbar from "./Navbar.js";
import HeaderSection from "./Header";
import Signup from "./Signup.js";
import Login from "./Login";
import Search from "./Search";
import Detail from "./Detail";
import Cart from "./Cart";
import axios from "axios";
import { connect } from "react-redux";
import mart from "./reduxstore/store";

// Heroic.comm
// heroku.com
// https://devcenter.heroku.com/articles/heroku-cli

function App(props) {
  var [user, setUser] = useState();

  var LoginDone = (customer_data) => {
    setUser(customer_data);
  };

  return (
    <div className="App">
      <Router>
        <HeaderSection />
        <Navbar customerdetail={user} />
        <div className="components">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login">
              <Login informlogin={LoginDone} />
            </Route>
            <Route exact path="/signup" component={Signup} />
            <Route path="/search" component={Search} />
            <Route exact path="/cake/:cakeid" component={Detail} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default connect()(App);
