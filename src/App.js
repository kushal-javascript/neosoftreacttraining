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
import Checkout from "./Checkout";
import axios from "axios";
import { connect } from "react-redux";
import mart from "./reduxstore/store";
import Footer from "./Footer";
import ForgotPassword from "./ForgotPassword";
import MyOrder from "./MyOrder";

// heroku.com
// https://devcenter.heroku.com/articles/heroku-cli

//(21-04-2021)
//recoverpassword 
//post {email:""}

// Place order
//var data = {price: TotalPrice,name: props.address?.name,phone: props.address?.phone,address: props.address?.address,city: props.address?.city,pincode: props.address?.pincode,cakes: props.cartDetails}

function App(props) {
  var [user, setUser] = useState();

  var LoginDone = (customer_data) => {
    setUser(customer_data);
  };

  useEffect(() => {
    if (localStorage.token && !props.user) {
      var token = localStorage.token;
      axios({
        method: "get",
        url: "https://apifromashu.herokuapp.com/api/getuserdetails",
        headers: {
          authtoken: token,
        },
      }).then(
        (response) => {
          console.log("INIT_CUSTOMER_DATA");
          props.dispatch({
            type: "INIT_CUSTOMER_DATA",
            payload: response.data.data,
          });
        },
        (error) => {
          props.dispatch({
            type: "LOGOUT",
          });
          console.log(error);
        }
      );
    }
  }, []);
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
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/orders" component={MyOrder} />
            <Route exact path="/signup" component={Signup} />
            <Route path="/search" component={Search} />
            <Route exact path="/cake/:cakeid" component={Detail} />
            <Route exact path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default connect()(App);
