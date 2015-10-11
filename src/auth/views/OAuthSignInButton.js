import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { oAuthSignIn } from "../actions/oauth-sign-in";

@connect(({auth}) => ({auth}))
class OAuthSignInButton extends React.Component {
  static propTypes = {
    provider: PropTypes.string.isRequired,
    label: PropTypes.string,
    bsStyle: PropTypes.string,
    signInParams: PropTypes.object
  }

  static defaultProps = {
    bsStyle: "default",
    label: "OAuth Sign In",
    signInParams: {}
  }

  handleClick () {
    this.props.dispatch(oAuthSignIn({
      provider: this.props.provider,
      params: this.props.signInParams
    }));
  }

  render () {
    let disabled = this.props.auth.getIn(["user", "isSignedIn"]);
    return (
      <Button onClick={this.handleClick.bind(this)}
              disabled={disabled}
              bsStyle={this.props.bsStyle}>
        {this.props.label}
      </Button>
    );
  }
}

export default OAuthSignInButton;
