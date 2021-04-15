import logo from "./logo.svg";
import "./App.css";
import Home from "./Home.js";
import Navbar from "./Navbar.js";
import Signup from "./Signup.js";
import Login from "./Login";
import { useState } from "react";
import Search from "./Search";
import Detail from "./Detail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

// Heroic.comm
// heroku.com
// https://devcenter.heroku.com/articles/heroku-cli

function App() {
  var [user, setUser] = useState();

  var LoginDone = (customer_data) => {
    setUser(customer_data);
    //alert("Login Component Called ");
  };

  return (
    <div className="App">
      <Router>
        <Navbar customerdetail={user} />
        <div className="components">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login informlogin={LoginDone} />
              {user && <Redirect to="/" />}
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/cake/:cakeid">
              <Detail />
            </Route>
            <Route path="/*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
