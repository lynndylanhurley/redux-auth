import React, { PropTypes } from "react";
import ButtonLoader from "./ButtonLoader";
import { destroyAccount } from "../actions/destroy-account";
import { connect } from "react-redux";
import { Glyphicon } from "react-bootstrap";

@connect(({auth}) => ({auth}))
class DestroyAccountButton extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    icon: PropTypes.node
  }

  static defaultProps = {
    children: <span>Destroy Account</span>,
    icon: <Glyphicon glyph="remove" />
  }

  handleClick () {
    this.props.dispatch(destroyAccount(this.props.endpoint));
  }

  render () {
    let disabled = !this.props.auth.getIn(["user", "isSignedIn"]);
    return (
      <ButtonLoader
        loading={this.props.auth.getIn(["destroyAccount", "loading"])}
        icon={this.props.icon}
        disabled={disabled}
        className="destroy-account-submit"
        onClick={this.handleClick.bind(this)}
        {...this.props} />
    );
  }
}

export default DestroyAccountButton;
