import React, { PropTypes } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { hideFirstTimeLoginErrorModal } from "../../../actions/ui";

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
      <Modal
        isOpen={this.props.show}
        className="redux-auth-modal first-time-login-error-modal"
        onRequestClose={this.close.bind(this)}>
        <h2 className="redux-auth-modal-header">
          Confirmation Error
          <button className="close-modal" onClick={this.close.bind(this)}>close</button>
        </h2>

        <div className="redux-auth-modal-body">
          There was a problem confirming your account. Please try again.
        </div>

        <div className="redux-auth-modal-footer">
          <button
            className="first-time-login-error-modal-close"
            onClick={this.close.bind(this)}>
            Ok
          </button>
        </div>
      </Modal>
    );
  }
}

export default connect()(FirstTimeLoginErrorModal);
