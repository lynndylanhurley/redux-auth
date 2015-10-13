import React from "react";
import Container from "./partials/Container";
import IndexPanel from "./partials/IndexPanel";
import CodeSnippet from "./partials/CodeSnippet";
import RequestTestButton from "./partials/RequestTestButton";
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

@connect(({auth}) => ({
  currentUserUid: auth.getIn(["user", "attributes", "provider"]) || "none",
  currentUserProvider: auth.getIn(["user", "attributes", "uid"]) || "none"
}))
class Main extends React.Component {
  render () {
    return (
      <Container>
        <h1>Main Page</h1>

        <Row>
          <IndexPanel header="Current User">
            <label>provider</label>
            <p>{this.props.currentUserUid}</p>

            <label>uid</label>
            <p>{this.props.currentUserProvider}</p>

            <RequestTestButton path="/demo/members_only" />
          </IndexPanel>

          <IndexPanel header="Email Sign In">
            <EmailSignInForm />

            <CodeSnippet>
              {`
                // import
                import {EmailSignInForm} from "redux-auth";

                // render
                <EmailSignInForm />
              `}
            </CodeSnippet>
          </IndexPanel>

          <IndexPanel header="Sign Out">
            <SignOutButton />

            <CodeSnippet>
              {`
                // import
                import {SignOutButton} from "redux-auth";

                // render
                <SignOutButton />
              `}
            </CodeSnippet>
          </IndexPanel>

          <IndexPanel header="Email Sign Up">
            <EmailSignUpForm />

            <CodeSnippet>
              {`
                // import
                import {EmailSignUpForm} from "redux-auth";

                // render
                <EmailSignUpForm />
              `}
            </CodeSnippet>
          </IndexPanel>

          <IndexPanel header="OAuth Sign In">
            <ButtonGroup>
              <OAuthSignInButton provider="github">Github</OAuthSignInButton>
              <OAuthSignInButton provider="facebook" bsStyle="primary">Facebook</OAuthSignInButton>
              <OAuthSignInButton provider="google" bsStyle="warning">Google</OAuthSignInButton>
            </ButtonGroup>


            <CodeSnippet>
              {`
                // import
                import {OAuthSignInButton} from "redux-auth";

                // render
                <OAuthSignInButton provider="github" />
              `}
            </CodeSnippet>
          </IndexPanel>

          <IndexPanel header="Destroy Account" bsStyle="danger">
            <DestroyAccountButton bsStyle="danger" />


            <CodeSnippet>
              {`
                // import
                import {DestroyAccountButton} from "redux-auth";

                // render
                <DestroyAccountButton />
              `}
            </CodeSnippet>
          </IndexPanel>

          <IndexPanel header="Request Password Reset">
            <RequestPasswordResetForm />

            <CodeSnippet>
              {`
                // import
                import {RequestPasswordResetForm} from "redux-auth";

                // render
                <RequestPasswordResetForm />
              `}
            </CodeSnippet>
          </IndexPanel>

          <IndexPanel header="Update Password">
            <UpdatePasswordForm />

            <CodeSnippet>
              {`
                // import
                import {UpdatePasswordForm} from "redux-auth";

                // render
                <UpdatePasswordForm />
              `}
            </CodeSnippet>
          </IndexPanel>
        </Row>

        {console.log("bang 2")}
      </Container>
    );
  }
}

export default Main;
