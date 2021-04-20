import { useEffect, useState } from "react";
import axios from "axios";
import { Link , withRouter } from "react-router-dom";
import { connect } from "react-redux";

function Login(props) {
  var user = {};
  var [error, setError] = useState();
  var [user, setUser] = useState({});

  let getEmail = (event) => {
    setUser({
      ...user,
      email: event.target.value,
    });
  };

  let getPassword = (event) => {
    setUser({
      ...user,
      password: event.target.value,
    });
  };

  let login = (event) => {
    event.preventDefault();
    let apiUrl = "https://apibyashu.herokuapp.com/api/login";
    axios({
      url: apiUrl,
      method: "post",
      data: user,
    }).then(
      (response) => {
        if (response.data.token) {
          localStorage.token = response.data.token
          setError("Login Success");
          //props.informlogin(response.data.name);
          console.log("LOGIN_API");
          props.dispatch({
            type:"LOGIN",
            payload: response.data
          })
          props.history.push("/");
        } else {
          setError(response);
        }
      },
      (error) => {
        setError(error);
        console.log(error);
      }
    );
  };
  return (
    <div class="container">
      {/* <h3>setState method use in fucntion</h3>   */}
      {!props && props.history.push("/")}
      {!props.user && props.history.push("/")}
      <form style={{ width: "50%", margin: "auto" }}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control required"
            onChange={getEmail}
            name="email"
          />
          {user && <small class="form-text text-muted">{user.email}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control required"
            onChange={getPassword}
            name="password"
          />
          {user && <small class="form-text text-muted">{user.password}</small>}
        </div>
        <div style={{ color: "red" }}>{error}</div>
        <div className="registration-login">
          <Link to="/signup">Signup</Link>
        </div>
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
}
Login = withRouter(Login)
export default connect(function(state,action){
  return {
    user:state?.user
  }
})(Login);
