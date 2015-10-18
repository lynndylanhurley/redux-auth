import React, { PropTypes } from "react";
import { connect } from "react-redux";
import ButtonLoader from "./ButtonLoader";
import { oAuthSignIn } from "../actions/oauth-sign-in";

@connect(({auth}) => ({auth}))
class OAuthSignInButton extends React.Component {
  static propTypes = {
    provider: PropTypes.string.isRequired,
    label: PropTypes.string,
    signInParams: PropTypes.object,
    children: PropTypes.node
  }

  static defaultProps = {
    signInParams: {},
    children: <span>OAuth Sign In</span>
  }

  handleClick () {
    this.props.dispatch(oAuthSignIn({
      provider: this.props.provider,
      params: this.props.signInParams
    }));
  }

  render () {
    let disabled = this.props.auth.getIn(["user", "isSignedIn"]);
    let loading = (
      (this.props.auth.getIn(["ui", "oAuthSignInLoadingProvider"]) === this.props.provider) &&
      this.props.auth.getIn(["oAuthSignIn", "loading"])
    );

    return (
      <ButtonLoader {...this.props}
                    loading={loading}
                    glyph="log-in"
                    disabled={disabled}
                    onClick={this.handleClick.bind(this)} />
    );
  }
}

export default OAuthSignInButton;
