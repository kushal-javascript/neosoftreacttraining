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
      <nav className="navbar-link">
        <div className="links" id="navbarSupportedContentData">
          {props && props.user ? (
            <ul className="header links">
              <li>
                <Link to="/">Welcome {props.user.name}</Link>&nbsp;&nbsp;
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          ) : (
            <ul className="header links">
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
      <div className="header content">
        <div className="header-logo col-lg-3 col-4">
          <a className="navbar-brand" href="/" style={{ padding: "0px" }}>
            <img
              src="./logo192.png"
              style={{ width: "auto", maxWidth: "35%" }}
              className="img-fluid img-thumbnail"
            />
          </a>
        </div>
        <div className="col-lg-5 col-1" />
        <div className="header-search col-lg-4 col-7 d-flex flex-row-reverse">
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
            <Link to="/cart">
              <button className="btn my-2 my-sm-2" style={{ height: "76%" }}>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
              </button>
            </Link>
          </form>
        </div>
      </div>
    </header>
  );
}
HeaderSection = withRouter(HeaderSection);
export default connect(function (state, action) {
  return {
    user: state?.user,
  };
})(HeaderSection);
