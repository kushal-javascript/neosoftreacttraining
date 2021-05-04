import { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Route, Link, useRouteMatch, useHistory } from "react-router-dom";

function ForgotPassword(props) {
  var history = useHistory();

  if (localStorage.token) {
    history.push("/");
  }

  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  var forgotPassword = (event) => {
    event.preventDefault();
    if (!email) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
      let apiurl = "https://apifromashu.herokuapp.com/api/recoverpassword";
      var data = {
        email,
      };
      axios({
        url: apiurl,
        method: "post",
        data: data,
      }).then(
        (response) => {
          if (response.data.message === "No Such Email exists") {
            alert("No Such Email Exists");
          } else {
            alert("Password Successfully Sent to Your Mail");
            setEmail("");
          }
        },
        (error) => {
          console.log("Error from forgot password api", error);
        }
      );
    }
  };

  return (
    <div style={{ marginTop: "10px" }} className="container">
      <div className="col-md-6">
        <h2 style={{ color: "darkgrey", marginLeft: "150px" }}>
          Forgot Your Password
        </h2>
        <form onSubmit={forgotPassword}>
          <div className="form-group">
            <label for="exampleInputEmail1">Enter Your Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder="Email"
              value={email}
            />
            {errorMessage ? (
              <p style={{ color: "red" }}>Email is required</p>
            ) : (
              ""
            )}
          </div>

          <p style={{ color: "red" }}>{errorMessage}</p>
          <button
            style={{ marginBottom: "3px" }}
            type="submit"
            className="btn btn-primary"
          >
            Click Here
          </button>
          <br />
        </form>
      </div>
    </div>
  );
}

export default connect()(ForgotPassword);
