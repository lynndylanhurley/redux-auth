import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Dialog, FlatButton } from "material-ui";
import { hideFirstTimeLoginErrorModal } from "../../../actions/ui";

@connect()
class FirstTimeLoginErrorModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideFirstTimeLoginErrorModal());
  }

  render () {
    return (
      <Dialog
        open={this.props.show}
        contentClassName="redux-auth-modal first-time-login-error-modal"
        title="Confirmation Error"
        actions={[
          <FlatButton
            key="close"
            className="first-time-login-error-modal-close"
            onClick={this.close.bind(this)}>
            Ok
          </FlatButton>
        ]}>
        <p>There was a problem confirming your account. Please try again.</p>
      </Dialog>
    );
  }
}

export default FirstTimeLoginErrorModal;
