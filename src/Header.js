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
  
  useEffect(() => {
    if (localStorage.token && !userData.user) {
      var token = localStorage.token;
      axios({
        method: "get",
        url: "https://apibyashu.herokuapp.com/api/getuserdetails",
        headers: {
          authtoken: token,
        },
      }).then(
        (response) => {
          props.dispatch({
            type: "INIT_CUSTOMER_DATA",
            payload: response.data.data,
          });
          props.history.push(location.pathname);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, []);

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
        style={{ backgroundColor: "#6e716e", color: "#000" }}
      >
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {userData && userData.user ? (
            <ul
              className="header links"
              style={{
                float: "right",
                listStyle: "none",
                display: "-webkit-inline-box",
                margin: "0",
                marginLeft: "auto",
                padding: "0",
              }}
            >
              <li>
                <Link to="/">Welcome {userData.user.name}</Link>&nbsp;&nbsp;
              </li>
              <li>
                <button
                  style={{
                    background: "none!important",
                    border: "none",
                    padding: "0!important",
                    cursor: "pointer",
                  }}
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul
              className="header links"
              style={{
                float: "right",
                listStyle: "none",
                display: "-webkit-inline-box",
                margin: "0",
                marginLeft: "auto",
                padding: "0",
              }}
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
        style={{
          display: "-webkit-box",
          margin: "20px 30px 20px",
        }}
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
export default connect()(HeaderSection);
