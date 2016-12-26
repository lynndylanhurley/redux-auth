import React from "react";
import IndexPanel from "./partials/IndexPanel";
import CodeSnippet from "./partials/CodeSnippet";
import ExampleWell from "./partials/ExampleWell";
import RequestTestButton from "./partials/RequestTestButton";
import { browserHistory } from "react-router";
import { updateDemoTheme, updateDemoEndpoint } from "../actions/demo-ui";
import { PageHeader, Row, ButtonGroup, Table } from "react-bootstrap";
import { connect } from "react-redux";
import * as BSTheme from "../../../src/views/bootstrap";
import * as DefaultTheme from "../../../src/views/default";
import * as MUITheme from "../../../src/views/material-ui";
import Select from "react-select";


class Main extends React.Component {
  updateTheme ({value}) {
    this.props.dispatch(updateDemoTheme(value));
  }

  updateEndpoint ({value}) {
    this.props.dispatch(updateDemoEndpoint(value));
  }

  render () {
    let Theme = MUITheme;
    let themePath = "/material-ui-theme";
    let endpointAttr = (this.props.pageEndpoint === "default")
      ? ""
      : "endpoint=\"evilUser\"";

    switch(this.props.theme) {
      case "default":
        Theme = DefaultTheme;
        themePath = "";
        break;
      case "bootstrap":
        Theme = BSTheme;
        themePath = "/bootstrap-theme";
        break;
    }

    return (
      <div>
        <PageHeader>Redux Auth Demo</PageHeader>

        <Row>
          <IndexPanel header="Current User">
            <label>current user provider</label>
            <p>{this.props.currentUserUid}</p>

            <label>current user uid</label>
            <p>{this.props.currentUserProvider}</p>

            <label>currently selected theme</label>
            <Select
              value={this.props.theme}
              clearable={false}
              options={[
                {value: "default", label: "Default"},
                {value: "bootstrap", label: "Bootstrap"},
                {value: "materialUi", label: "Material UI"}
              ]}
              onChange={this.updateTheme.bind(this)} />

            <label>currently selected endpoint</label>
            <Select
              value={this.props.pageEndpoint}
              clearable={false}
              options={[
                {value: "default", label: "Default User Class"},
                {value: "evilUser", label: "Alternate User Class"}
              ]}
              onChange={this.updateEndpoint.bind(this)} />

            <Table>
              <thead>
                <tr>
                  <th colSpan={2}>
                    ajax test
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Default user:</td>
                  <td><RequestTestButton
                      path="/demo/members_only"
                      endpointKey="default"/></td>
                </tr>
                <tr>
                  <td>Alternate user class:</td>
                  <td><RequestTestButton
                      path="/demo/members_only_mang"
                      endpointKey="evilUser"/></td>
                </tr>
                <tr>
                  <td>Group that includes both user classes:</td>
                  <td><RequestTestButton
                      path="/demo/members_only_group"
                      endpointKey="any"/></td>
                </tr>
                <tr>
                  <td>Default user:</td>
                  <td><RequestTestButton
                      xhr
                      path="/demo/members_only"
                      endpointKey="default"/></td>
                </tr>
                <tr>
                  <td>Alternate user class:</td>
                  <td><RequestTestButton
                      xhr
                      path="/demo/members_only_mang"
                      endpointKey="evilUser"/></td>
                </tr>
                <tr>
                  <td>Group that includes both user classes:</td>
                  <td><RequestTestButton
                      xhr
                      path="/demo/members_only_group"
                      endpointKey="any"/></td>
                </tr>
              </tbody>
            </Table>
          </IndexPanel>

          <IndexPanel header="Email Sign In">
            <ExampleWell>
              <Theme.EmailSignInForm
                next={() =>  browserHistory.push("/account")}
                endpoint={this.props.pageEndpoint} />
            </ExampleWell>

            <CodeSnippet>
              {`
                // import
                import {EmailSignInForm} from "redux-auth${themePath}";

                // render
                <EmailSignInForm ${endpointAttr} />
              `}
            </CodeSnippet>
          </IndexPanel>

          <IndexPanel header="Sign Out">
            <ExampleWell>
              <Theme.SignOutButton endpoint={this.props.pageEndpoint} />
            </ExampleWell>

            <CodeSnippet>
              {`
                // import
                import {SignOutButton} from "redux-auth${themePath}";

                // render
                <SignOutButton ${endpointAttr} />
              `}
            </CodeSnippet>
          </IndexPanel>

          <IndexPanel header="Email Sign Up">
            <ExampleWell>
              <Theme.EmailSignUpForm endpoint={this.props.pageEndpoint} />
            </ExampleWell>

            <CodeSnippet>
              {`
                // import
                import {EmailSignUpForm} from "redux-auth${themePath}";

                // render
                <EmailSignUpForm ${endpointAttr} />
              `}
            </CodeSnippet>
          </IndexPanel>

          <IndexPanel header="OAuth Sign In">
            <ExampleWell>
              <ButtonGroup>
                <Theme.OAuthSignInButton
                  next={() =>  browserHistory.push("/account")}
                  provider="github"
                  endpoint={this.props.pageEndpoint}>
                  Github
                </Theme.OAuthSignInButton>
                <Theme.OAuthSignInButton
                  next={() =>  browserHistory.push("/account")}
                  provider="facebook"
                  endpoint={this.props.pageEndpoint}
                  secondary={true}
                  bsStyle="primary">
                  Facebook
                </Theme.OAuthSignInButton>
                <Theme.OAuthSignInButton
                  next={() =>  browserHistory.push("/account")}
                  provider="google"
                  endpoint={this.props.pageEndpoint}
                  primary={true}
                  bsStyle="warning">
                  Google
                </Theme.OAuthSignInButton>
              </ButtonGroup>
            </ExampleWell>

            <CodeSnippet>
              {`
                // import
                import {OAuthSignInButton} from "redux-auth${themePath}";

                // render
                <OAuthSignInButton provider="github" ${endpointAttr} />
              `}
            </CodeSnippet>
          </IndexPanel>

          <IndexPanel header="Destroy Account" bsStyle="danger">
            <ExampleWell>
              <Theme.DestroyAccountButton endpoint={this.props.pageEndpoint} bsStyle="danger" />
            </ExampleWell>

            <CodeSnippet>
              {`
                // import
                import {DestroyAccountButton} from "redux-auth${themePath}";

                // render
                <DestroyAccountButton ${endpointAttr} />
              `}
            </CodeSnippet>
          </IndexPanel>

          <IndexPanel header="Request Password Reset">
            <ExampleWell>
              <Theme.RequestPasswordResetForm endpoint={this.props.pageEndpoint} />
            </ExampleWell>

            <CodeSnippet>
              {`
                // import
                import {RequestPasswordResetForm} from "redux-auth${themePath}";

                // render
                <RequestPasswordResetForm ${endpointAttr} />
              `}
            </CodeSnippet>
          </IndexPanel>

          <IndexPanel header="Update Password">
            <ExampleWell>
              <Theme.UpdatePasswordForm endpoint={this.props.pageEndpoint} />
            </ExampleWell>

            <CodeSnippet>
              {`
                // import
                import {UpdatePasswordForm} from "redux-auth${themePath}";

                // render
                <UpdatePasswordForm ${endpointAttr} />
              `}
            </CodeSnippet>
          </IndexPanel>
        </Row>
      </div>
    );
  }
}

export default connect(({auth, demoUi}) => {
  return ({
    currentUserUid: auth.getIn(["user", "attributes", "provider"]) || "none",
    currentUserProvider: auth.getIn(["user", "attributes", "uid"]) || "none",
    currentUserEndpoint: auth.getIn(["user", "endpointKey"]) || "none",
    theme: demoUi.get("theme"),
    pageEndpoint: demoUi.get("endpoint")
  })
})(Main);
