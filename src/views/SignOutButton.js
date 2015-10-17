import React, { PropTypes } from "react";
import ButtonLoader from "./ButtonLoader";
import { connect } from "react-redux";
import { signOut } from "../actions/sign-out";

@connect(({auth}) => ({auth}))
class SignOutButton extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    glyph: PropTypes.string
  }

  static defaultProps = {
    children: <span>Sign Out</span>,
    glyph: "log-out"
  }

  handleClick () {
    this.props.dispatch(signOut());
  }

  render () {
    let disabled = !this.props.auth.getIn(["user", "isSignedIn"]);
    return (
      <ButtonLoader {...this.props}
                    loading={this.props.auth.getIn(["signOut", "loading"])}
                    glyph={this.props.glyph}
                    disabled={disabled}
                    onClick={this.handleClick.bind(this)} />
    );
  }
}

export default SignOutButton;
