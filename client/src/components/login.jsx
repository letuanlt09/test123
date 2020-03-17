import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
    login: false,
    success: false,
    signUp: false
  };
  changeHandle = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };
  signUpHandle = event => {
    this.setState({ signUp: true });
  };
  loginHandle = event => {
    event.preventDefault();
    const dataInput = {
      username: this.state.username,
      password: this.state.password
    };
    //make a post request
    axios({
      url: "http://localhost:8080/login",
      method: "POST",
      data: dataInput
    })
      .then(res => {
        console.log("Data has been sent to server");

        if (res.data.mess == "true") {
          this.setState({
            success: true,
            login: true
          });
        } else {
          this.setState({
            success: false,
            login: true
          });
        }
      })
      .catch(() => {
        console.log("Server err");
      });
  };
  render() {
    if (this.state.signUp) {
      return <Redirect to="/signUp" />;
    } else {
      if (this.state.login) {
        if (this.state.success) {
          return <Redirect to="/success" />;
        } else {
          return <Redirect to="/failed" />;
        }
      } else {
        return (
          <div className="container" style={{ height: "100vh" }}>
            <div
              className="row justify-content-center"
              style={{ height: "100%" }}
            >
              <div class="col-sm-4">
                <br />
                <div class="card">
                  <article class="card-body">
                    <h4 class="card-title mb-4 mt-1">Sign in</h4>
                    <form>
                      <div class="form-group">
                        <label>Your username</label>
                        <input
                          name="username"
                          class="form-control"
                          placeholder="Username"
                          onChange={this.changeHandle}
                        />
                      </div>
                      <div class="form-group">
                        <label>Your password</label>
                        <input
                          name="password"
                          class="form-control"
                          placeholder="******"
                          type="password"
                          onChange={this.changeHandle}
                        />
                      </div>
                      <div class="form-group">
                        <div class="checkbox"></div>
                      </div>
                      <div class="form-group">
                        <button
                          type="submit"
                          class="btn btn-primary btn-block"
                          onClick={this.loginHandle}
                        >
                          {" "}
                          Login{" "}
                        </button>
                        <button
                          type="submit"
                          class="btn btn-primary btn-block"
                          onClick={this.signUpHandle}
                        >
                          {" "}
                          Sign Up{" "}
                        </button>
                      </div>
                    </form>
                  </article>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  }
}

export default Login;
