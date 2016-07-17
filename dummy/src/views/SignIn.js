import React from "react";
import { PageHeader } from "react-bootstrap";
import { connect } from "react-redux";
import { EmailSignInForm } from "../../../src/views/bootstrap";
import { browserHistory } from "react-router";

class SignIn extends React.Component {
  render () {
    return (
      <div>
        <PageHeader>Sign In</PageHeader>

        <EmailSignInForm
          next={() =>  browserHistory.push("/account")}
          endpoint={this.props.pageEndpoint} />
      </div>
    );
  }
}

export default connect(({routes}) => ({routes}))(SignIn);
