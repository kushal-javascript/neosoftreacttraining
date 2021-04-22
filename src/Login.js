import { useEffect, useState } from "react";
import axios from "axios";
import { Link , withRouter } from "react-router-dom";
import { connect } from "react-redux";

function Login(props) {
  var user = {};
  var [errors, setError] = useState();
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
    console.log(event)
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
          //setError("Login Success");
          //props.informlogin(response.data.name);
          console.log("LOGIN_API");
          props.dispatch({
            type:"LOGIN",
            payload: response.data
          })
          props.history.push("/");
        } else {
          console.log(response.data.message);
          setError(response.data.message);
        }
      },
      (error) => {
        //setError(error.data);
        console.log(error.data);
      }
    );
  };
  return (
    <div className="login-page">
      {/* <h3>setState method use in fucntion</h3>   */}
      {/* {!props && props.history.push("/")}
      {!props.user && props.history.push("/")} */}
      <h2 style={{textAlign:"center"}}>Customer Login</h2>
      <form id="loginform" style={{ width: "50%" }} onSubmit={login}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            className="form-control required"
            onChange={getEmail}
            required
            name="email"
          />
          {user && <small className="form-text text-muted">{user.email}</small>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control required"
            onChange={getPassword}
            required
            name="password"
          />
          {/* {user && <small className="form-text text-muted">{user.password}</small>} */}
        </div>
        <div style={{ color: "red" }}>{errors}</div>
        <div className="registration-login">
          <Link to="/signup">Create an Account</Link>
        </div>
        <button type="submit" className="btn btn-primary">
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
