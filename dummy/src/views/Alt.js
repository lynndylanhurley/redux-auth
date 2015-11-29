import React from "react";
import IndexPanel from "./partials/material-ui/IndexPanel";
import CodeSnippet from "./partials/CodeSnippet";
import ExampleWell from "./partials/material-ui/ExampleWell";
import RequestTestButton from "./partials/RequestTestButton";
import { PageHeader, ButtonGroup } from "react-bootstrap";
import { GridList } from "material-ui";
import { connect } from "react-redux";
import {
  EmailSignInForm,
  EmailSignUpForm,
  SignOutButton,
  RequestPasswordResetForm,
  OAuthSignInButton,
  UpdatePasswordForm,
  DestroyAccountButton
} from "../../../src/views/material-ui";

class Alt extends React.Component {

  render () {
    return (
      <div>
        <PageHeader>Redux Auth Demo</PageHeader>

        <GridList cols={2} cellHeight="auto">
          <IndexPanel title="Current User">
            <label>provider</label>
            <p>{this.props.currentUserUid}</p>

            <label>uid</label>
            <p>{this.props.currentUserProvider}</p>

            <label>endpoint key</label>
            <p>{this.props.currentUserEndpoint}</p>

            <label>ajax test</label>
            <p><RequestTestButton endpointKey="evilUser" path="/demo/members_only_mang" /></p>
          </IndexPanel>

          <IndexPanel title="Email Sign In">
            <ExampleWell>
              <EmailSignInForm endpoint="evilUser" />
            </ExampleWell>

            <CodeSnippet>
              {`
                // import
                import {EmailSignInForm} from "redux-auth";

                // render
                <EmailSignInForm endpoint="evilUser" />
              `}
            </CodeSnippet>
          </IndexPanel>

          <IndexPanel title="Sign Out">
            <ExampleWell>
              <SignOutButton endpoint="evilUser" />
            </ExampleWell>

            <CodeSnippet>
              {`
                // import
                import {SignOutButton} from "redux-auth";

                // render
                <SignOutButton endpoint="evilUser" />
              `}
            </CodeSnippet>
          </IndexPanel>

          <IndexPanel title="Email Sign Up">
            <ExampleWell>
              <EmailSignUpForm endpoint="evilUser" />
            </ExampleWell>

            <CodeSnippet>
              {`
                // import
                import {EmailSignUpForm} from "redux-auth";

                // render
                <EmailSignUpForm endpoint="evilUser" />
              `}
            </CodeSnippet>
          </IndexPanel>

          <IndexPanel title="OAuth Sign In">
            <ExampleWell>
              <ButtonGroup>
                <OAuthSignInButton endpoint="evilUser" provider="github">Github</OAuthSignInButton>
                <OAuthSignInButton endpoint="evilUser" secondary={true} provider="facebook">Facebook</OAuthSignInButton>
                <OAuthSignInButton endpoint="evilUser" primary={true} provider="google">Google</OAuthSignInButton>
              </ButtonGroup>
            </ExampleWell>

            <CodeSnippet>
              {`
                // import
                import {OAuthSignInButton} from "redux-auth";

                // render
                <OAuthSignInButton endpoint="evilUser" provider="github" />
              `}
            </CodeSnippet>
          </IndexPanel>

          <IndexPanel title="Destroy Account" bsStyle="danger">
            <ExampleWell>
              <DestroyAccountButton endpoint="evilUser" />
            </ExampleWell>

            <CodeSnippet>
              {`
                // import
                import {DestroyAccountButton} from "redux-auth";

                // render
                <DestroyAccountButton endpoint="evilUser" />
              `}
            </CodeSnippet>
          </IndexPanel>

          <IndexPanel title="Request Password Reset">
            <ExampleWell>
              <RequestPasswordResetForm endpoint="evilUser" />
            </ExampleWell>

            <CodeSnippet>
              {`
                // import
                import {RequestPasswordResetForm} from "redux-auth";

                // render
                <RequestPasswordResetForm endpoint="evilUser" />
              `}
            </CodeSnippet>
          </IndexPanel>

          <IndexPanel title="Update Password">
            <ExampleWell>
              <UpdatePasswordForm endpoint="evilUser" />
            </ExampleWell>

            <CodeSnippet>
              {`
                // import
                import {UpdatePasswordForm} from "redux-auth";

                // render
                <UpdatePasswordForm endpoint="evilUser" />
              `}
            </CodeSnippet>
          </IndexPanel>
        </GridList>
      </div>
    );
  }
}

export default connect(({auth}) => ({
  currentUserUid: auth.getIn(["user", "attributes", "provider"]) || "none",
  currentUserProvider: auth.getIn(["user", "attributes", "uid"]) || "none",
  currentUserEndpoint: auth.getIn(["user", "attributes", "endpointKey"]) || "none"
}))(Alt);
