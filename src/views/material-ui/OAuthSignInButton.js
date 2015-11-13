import React, { PropTypes } from "react";
import { connect } from "react-redux";
import ButtonLoader from "./ButtonLoader";
import { Glyphicon } from "react-bootstrap";
import { oAuthSignIn } from "../../actions/oauth-sign-in";

@connect(({auth}) => ({auth}))
class OAuthSignInButton extends React.Component {
  static propTypes = {
    provider: PropTypes.string.isRequired,
    label: PropTypes.string,
    signInParams: PropTypes.object,
    children: PropTypes.node,
    icon: PropTypes.node
  }

  static defaultProps = {
    signInParams: {},
    children: <span>OAuth Sign In</span>,
    icon: <Glyphicon glyph="log-in" />
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
      <ButtonLoader
        loading={loading}
        icon={this.props.icon}
        className="oauth-sign-in-submit"
        disabled={disabled}
        onClick={this.handleClick.bind(this)}
        {...this.props} />
    );
  }
}

export default OAuthSignInButton;
