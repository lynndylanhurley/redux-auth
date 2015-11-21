import React, { PropTypes } from "react";
import Modal from "react-modal";
import { hideSignOutErrorModal } from "../../../actions/ui";
import { connect } from "react-redux";

@connect()
class SignOutErrorModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideSignOutErrorModal());
  }

  render () {
    return (
      <Modal
        isOpen={this.props.show}
        className="sign-out-error-modal"
        onRequestClose={this.close.bind(this)}>
        <h2 className="redux-auth-modal-header">
          Sign Out Error
          <button className="close-modal" onClick={this.close.bind(this)}>close</button>
        </h2>

        <div className="redux-auth-modal-body">
          The server encountered an error while trying to sign you out. Your
          account information has been wiped from this browser, but you may
          want to sign in and then sign back out again to resolve any issues.
        </div>

        <div className="redux-auth-modal-footer">
          <button
            className="sign-out-error-modal-close"
            onClick={this.close.bind(this)}>
            Ok
          </button>
        </div>
      </Modal>
    );
  }
}

export default SignOutErrorModal;
