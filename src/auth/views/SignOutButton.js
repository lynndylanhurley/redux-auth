import React, { PropTypes } from "react";
import { Button, Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";
import { signOut } from "../actions/sign-out";

@connect(({auth}) => ({auth}))
class SignOutButton extends React.Component {
  static propTypes = {
    label: PropTypes.string
  }

  static defaultProps = {
    label: "Sign Out"
  }

  handleClick () {
    this.props.dispatch(signOut());
  }

  render () {
    let disabled = !this.props.auth.getIn(["user", "isSignedIn"]);
    return (
      <Button onClick={this.handleClick.bind(this)}
              disabled={disabled}>
        <Glyphicon glyph="log-out" /> {this.props.label}
      </Button>
    );
  }
}

export default SignOutButton;
