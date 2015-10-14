import React from "react";
import { connect } from "react-redux";

@connect(({routes}) => ({routes}))
class SignIn extends React.Component {
  render () {
    return (
      <div>
        <h2>Sign In</h2>
      </div>
    );
  }
}

export default SignIn;
