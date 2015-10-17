import React from "react";
import { PageHeader } from "react-bootstrap";
import { connect } from "react-redux";

@connect(({routes}) => ({routes}))
class SignIn extends React.Component {
  render () {
    return (
      <div>
        <PageHeader>Sign In</PageHeader>
      </div>
    );
  }
}

export default SignIn;
