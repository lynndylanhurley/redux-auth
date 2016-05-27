import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { signOut } from "../../actions/sign-out";

class SignOutLink extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {
    children: "Sign Out"
  };

  getEndpoint () {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  handleClick () {
    this.props.dispatch(signOut(this.getEndpoint()));
  }

  render () {
    let disabled = !this.props.auth.getIn(["user", "isSignedIn"]);
    return (
      <a disabled={disabled}
        className="sign-out-link"
        onClick={this.handleClick.bind(this)}
        {...this.props}>{ this.props.children }
      </a>
    );
  }
}

export default connect(({auth}) => ({auth}))(SignOutLink);
