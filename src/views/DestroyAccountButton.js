import React, { PropTypes } from "react";
import ButtonLoader from "./ButtonLoader";
import { destroyAccount } from "../actions/destroy-account";
import { connect } from "react-redux";

@connect(({auth}) => ({auth}))
class DestroyAccountButton extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    glyph: PropTypes.string
  }

  static defaultProps = {
    children: <span>Destroy Account</span>,
    glyph: "remove"
  }

  handleClick () {
    this.props.dispatch(destroyAccount());
  }

  render () {
    let disabled = !this.props.auth.getIn(["user", "isSignedIn"]);
    return (
      <ButtonLoader {...this.props}
                    loading={this.props.auth.getIn(["destroyAccount", "loading"])}
                    glyph={this.props.glyph}
                    disabled={disabled}
                    onClick={this.handleClick.bind(this)} />
    );
  }
}

export default DestroyAccountButton;
