import React from "react";
import Container from "./partials/Container";
import IndexWell from "./partials/IndexWell";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import {
  EmailSignInForm,
  EmailSignUpForm,
  SignOutButton,
  RequestPasswordResetForm
} from "../auth/index";

@connect(({auth}) => ({auth}))
class Main extends React.Component {
  render () {
    return (
      <Container>
        <h1>Main Page</h1>

        <Row>
          <IndexWell>
            <label>Current User</label>
            <p>{this.props.auth.getIn(["user", "attributes", "email"])}</p>
          </IndexWell>

          <IndexWell>
            <EmailSignInForm />
          </IndexWell>

          <IndexWell>
            <h2>Sign Out</h2>
            <SignOutButton />
          </IndexWell>

          <IndexWell>
            <EmailSignUpForm />
          </IndexWell>

          <IndexWell>
            <RequestPasswordResetForm />
          </IndexWell>
        </Row>
      </Container>
    );
  }
}

export default Main;
