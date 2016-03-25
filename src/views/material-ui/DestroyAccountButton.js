import React, { PropTypes } from "react";
import ButtonLoader from "./ButtonLoader";
import { destroyAccount } from "redux-auth/actions/destroy-account";
import {ActionDelete} from "material-ui/lib/svg-icons";
import { connect } from "react-redux";

class DestroyAccountButton extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    icon: PropTypes.func
  };

  static defaultProps = {
    children: <span>Destroy Account</span>,
    icon: ActionDelete
  };

  getEndpoint () {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  handleClick () {
    this.props.dispatch(destroyAccount(this.getEndpoint()));
  }

  render () {
    let disabled = !this.props.auth.getIn(["user", "isSignedIn"]);
    return (
      <ButtonLoader
        loading={this.props.auth.getIn(["destroyAccount", this.getEndpoint(), "loading"])}
        icon={this.props.icon}
        disabled={disabled}
        primary={true}
        className="destroy-account-submit"
        onClick={this.handleClick.bind(this)}
        {...this.props} />
    );
  }
}

export default connect(({auth}) => ({auth}))(DestroyAccountButton);
