import React, { PropTypes } from "react";
import { Dialog, FlatButton } from "material-ui";
import { connect } from "react-redux";
import { hideFirstTimeLoginSuccessModal } from "../../../actions/ui";

@connect(({auth}) => ({auth}))
class FirstTimeLoginSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideFirstTimeLoginSuccessModal());
  }

  render () {
    return (
      <Dialog
        open={this.props.show}
        contentClassName="redux-auth-modal first-time-login-success-modal"
        title={`Welcome ${this.props.auth.getIn(["user", "attributes", "email"])}!`}
        actions={[
          <FlatButton
            key="close"
            className="first-time-login-success-modal-close"
            onClick={this.close.bind(this)}>
            Close
          </FlatButton>
        ]}>
        <p>Your account has been confirmed.</p>
      </Dialog>
    );
  }
}

export default FirstTimeLoginSuccessModal;
