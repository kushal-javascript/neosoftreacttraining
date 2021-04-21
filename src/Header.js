import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  useLocation,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { connect, useSelector } from "react-redux";
import mart from "./reduxstore/store";
import axios from "axios";

function HeaderSection(props) {
  var [search, setSearch] = useState();
  var userData = mart.getState();
  const location = useLocation();

  let getSearch = (event) => {
    setSearch(event.target.value);
  };

  let searchButton = (event) => {
    event.preventDefault();
    if (search) {
      props.history.push("/search?q=" + search);
    }
  };
  let logout = (event) => {
    event.preventDefault();
    props.dispatch({
      type: "LOGOUT",
    });
    props.history.push("/");
  };

  return (
    <header className="header-class">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
      >
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {props && props.user ? (
            <ul
              className="header links"
            >
              <li>
                <Link to="/">Welcome {props.user.name}</Link>&nbsp;&nbsp;
              </li>
              <li>
                <button
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul
              className="header links"
            >
              <li>
                <Link to="/login">Sign In</Link>&nbsp;or&nbsp;
              </li>
              <li>
                <Link to="/signup">Create an Account</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <div
        className="header content"
      >
        <div className="header-logo">
          <a className="navbar-brand" href="/" style={{ padding: "0px" }}>
            <img
              src="./logo192.png"
              style={{ width: "auto", maxWidth: "35%" }}
              className="d-inline-block align-middle mr-2"
            />
          </a>
        </div>
        <div
          className="header-search"
          style={{
            float: "right",
            display: "-webkit-inline-box",
            margin: "0",
            marginLeft: "auto",
          }}
        >
          <form className="form-inline my-2 my-lg-0 search">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={getSearch}
            />
            <Link to="/search">
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                onClick={searchButton}
              >
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
              </button>
            </Link>
          </form>
          <Link to="/cart">
            <button className="btn my-2 my-sm-2" style={{ height: "76%" }}>
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
HeaderSection = withRouter(HeaderSection);
export default connect(function(state,action){
  return {
    user:state?.user
  }
})(HeaderSection);
