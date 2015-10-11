import React from "react";
import Container from "./partials/Container";
import IndexWell from "./partials/IndexWell";
import { Row, ButtonGroup } from "react-bootstrap";
import { connect } from "react-redux";
import {
  EmailSignInForm,
  EmailSignUpForm,
  SignOutButton,
  RequestPasswordResetForm,
  OAuthSignInButton,
  UpdatePasswordForm,
  DestroyAccountButton
} from "../auth/index";

@connect(({auth}) => ({auth}))
class Main extends React.Component {
  render () {
    return (
      <Container>
        <h1>Main Page</h1>

        <Row>
          <IndexWell>
            <h2>Current User</h2>

            <label>provider</label>
            <p>{this.props.auth.getIn(["user", "attributes", "provider"]) || "none"}</p>

            <label>uid</label>
            <p>{this.props.auth.getIn(["user", "attributes", "uid"]) || "none"}</p>
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
            <h2>OAuth Sign In</h2>
            <ButtonGroup>
              <OAuthSignInButton provider="github">Github</OAuthSignInButton>
              <OAuthSignInButton provider="facebook" bsStyle="primary">Facebook</OAuthSignInButton>
              <OAuthSignInButton provider="google" bsStyle="warning">Google</OAuthSignInButton>
            </ButtonGroup>
          </IndexWell>

          <IndexWell>
            <h2>Destroy Account</h2>
            <DestroyAccountButton />
          </IndexWell>

          <IndexWell>
            <RequestPasswordResetForm />
          </IndexWell>

          <IndexWell>
            <UpdatePasswordForm />
          </IndexWell>
        </Row>
      </Container>
    );
  }
}

export default Main;
