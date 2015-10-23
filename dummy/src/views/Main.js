import React from "react";
import IndexPanel from "./partials/IndexPanel";
import CodeSnippet from "./partials/CodeSnippet";
import ExampleWell from "./partials/ExampleWell";
import RequestTestButton from "./partials/RequestTestButton";
import { PageHeader, Row, ButtonGroup } from "react-bootstrap";
import { connect } from "react-redux";
import {
  EmailSignInForm,
  EmailSignUpForm,
  SignOutButton,
  RequestPasswordResetForm,
  OAuthSignInButton,
  UpdatePasswordForm,
  DestroyAccountButton
} from "../../../src";

@connect(({auth}) => ({
  currentUserUid: auth.getIn(["user", "attributes", "provider"]) || "none",
  currentUserProvider: auth.getIn(["user", "attributes", "uid"]) || "none"
}))
class Main extends React.Component {

  render () {
    return (
      <div>
        <PageHeader>Redux Auth Demo</PageHeader>

        <Row>
          <IndexPanel header="Current User">
            <label>provider</label>
            <p>{this.props.currentUserUid}</p>

            <label>uid</label>
            <p>{this.props.currentUserProvider}</p>

            <label>ajax test</label>
            <p><RequestTestButton path="/demo/members_only" /></p>
          </IndexPanel>

          <IndexPanel header="Email Sign In">
            <ExampleWell>
              <EmailSignInForm />
            </ExampleWell>

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
            <ExampleWell>
              <SignOutButton />
            </ExampleWell>

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
            <ExampleWell>
              <EmailSignUpForm />
            </ExampleWell>

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
            <ExampleWell>
              <ButtonGroup>
                <OAuthSignInButton provider="github">Github</OAuthSignInButton>
                <OAuthSignInButton provider="facebook" bsStyle="primary">Facebook</OAuthSignInButton>
                <OAuthSignInButton provider="google" bsStyle="warning">Google</OAuthSignInButton>
              </ButtonGroup>
            </ExampleWell>

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
            <ExampleWell>
              <DestroyAccountButton bsStyle="danger" />
            </ExampleWell>

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
            <ExampleWell>
              <RequestPasswordResetForm />
            </ExampleWell>

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
            <ExampleWell>
              <UpdatePasswordForm />
            </ExampleWell>

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

      </div>
    );
  }
}

export default Main;
