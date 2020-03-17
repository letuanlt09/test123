import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
class SignUp extends Component {
  state = {
    username: "",
    password: "",
    success: false,
    created: false
  };
  changeHandle = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  };
  createHandle = event => {
    event.preventDefault();
    const dataInput = {
      username: this.state.username,
      password: this.state.password
    };
    axios({
      url: "http://localhost:8080/createAccount",
      method: "POST",
      data: dataInput
    })
      .then(res => {
        console.log("Data has been sent to server");

        if (res.data.mess == "success") {
          this.setState({
            success: true,
            created: true
          });
        } else {
          this.setState({
            success: false,
            created: true
          });
        }
      })
      .catch(() => {
        console.log("Server err");
      });
  };
  render() {
    if (this.state.created) {
      if (this.state.success) {
        return <Redirect to="/createSuccess" />;
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
                  <h4 class="card-title mb-4 mt-1">Create Account</h4>
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
                        onClick={this.createHandle}
                      >
                        {" "}
                        Create Account{" "}
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

export default SignUp;
