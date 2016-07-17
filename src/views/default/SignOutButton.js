import React, { PropTypes } from "react";
import ButtonLoader from "./ButtonLoader";
import { connect } from "react-redux";
import { signOut } from "../../actions/sign-out";

class SignOutButton extends React.Component {
  static propTypes = {
    next: PropTypes.func,
    endpoint: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.string
  };

  static defaultProps = {
    next: () => {},
    children: <span>Sign Out</span>
  };

  getEndpoint () {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  handleClick () {
    this.props.dispatch(signOut(this.getEndpoint()))
      .then(this.props.next)
      .catch(() => {});
  }

  render () {
    let disabled = !this.props.auth.getIn(["user", "isSignedIn"]);
    return (
      <ButtonLoader
        loading={this.props.auth.getIn(["signOut", this.getEndpoint(), "loading"])}
        icon={this.props.icon}
        disabled={disabled}
        primary={true}
        className="sign-out-submit"
        onClick={this.handleClick.bind(this)}
        {...this.props} />
    );
  }
}

export default connect(({auth}) => ({auth}))(SignOutButton);
