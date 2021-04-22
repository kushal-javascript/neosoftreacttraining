import { Component } from "react";
import axios from "axios";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      onlineUser: 0,
    };
    //alert("constructor");
  }

  user = {};

  // componentDidMount(){
  // 	alert("componentDidMount");
  // }

  // componentDidUpdate(){
  // 	alert("componentDidUpdate");
  // }

  // componentWillUnmount(){
  // 	alert("componentWillUnmount");
  // }

  getName = (event) => {
    this.user.name = event.target.value;
  };

  getEmail = (event) => {
    this.user.email = event.target.value;
  };

  getPassword = (event) => {
    this.user.password = event.target.value;
  };

  goOnline = (event) => {
    this.setState({
      onlineUser: this.state.onlineUser + 1,
    });
  };

  register = (event) => {
    this.setState({
      errorMessageLogin: null,
    });
    event.preventDefault();
    if (!this.user.email || !this.user.password || !this.user.name) {
      this.setState({
        errorMessageLogin: "Please add details",
      });
    } else {
      let apiUrl = "https://apibyashu.herokuapp.com/api/register";
      axios({
        url: apiUrl,
        method: "post",
        data: this.user,
      }).then(
        (response) => {
          this.setState({
            errorMessageLogin: response.data,
          });
        },
        (error) => {
          this.setState({
            errorMessageLogin: error,
          });
        }
      );
    }
  };

  render() {
    return (
      <div class="sign-up-page">
        {/* <h3>setState method use in class</h3>   */}
        <h2 style={{ textAlign: "center" }}>Create New Customer Account</h2>
        <form style={{ width: "50%", marginLeft : "2%" }} onSubmit={this.register}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form-control required"
              onChange={this.getName}
              name="name"
			  required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control required"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              onChange={this.getEmail}
              name="email"
			  required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control required"
              onChange={this.getPassword}
              name="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />
          </div>

          <div style={{ color: "red" }}>{this.state.errorMessageLogin}</div>
          <button className="btn btn-primary">Register</button>
        </form>
      </div>
    );
  }
}

export default Signup;
