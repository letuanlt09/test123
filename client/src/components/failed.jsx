import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class Failed extends Component {
  state = {
    back: false
  };
  xHandle = event => {
    this.setState({ back: true });
  };
  render() {
    if (this.state.back) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="container">
          <div className="row justify-content-center">
            <div class="col-sm-6 col-md-6">
              <br />
              <div class="alert alert-danger">
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-hidden="true"
                  onClick={this.xHandle}
                >
                  ×
                </button>
                <span class="glyphicon glyphicon-ok"></span>{" "}
                <strong>Sorry!!!</strong>
                <hr class="message-inner-separator" />
                <p>You are failed to login</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Failed;
