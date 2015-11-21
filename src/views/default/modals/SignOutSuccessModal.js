import React, { PropTypes } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { hideSignOutSuccessModal } from "../../../actions/ui";

@connect()
class SignOutSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideSignOutSuccessModal());
  }

  render () {
    return (
      <Modal
        isOpen={this.props.show}
        className="redux-auth-modal sign-out-success-modal"
        onRequestClose={this.close.bind(this)}>
        <h2 className="redux-auth-modal-header">
          Goodbye!
          <button className="close-modal" onClick={this.close.bind(this)}>close</button>
        </h2>

        <div className="redux-auth-modal-body">
          You have been successfully signed out.
        </div>

        <div className="redux-auth-modal-footer">
          <button
            onClick={this.close.bind(this)}
            className="sign-out-success-modal-close">
            Ok
          </button>
        </div>
      </Modal>
    );
  }
}

export default SignOutSuccessModal;
