import React, { PropTypes } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { hideUpdatePasswordSuccessModal } from "../../../actions/ui";

@connect()
class UpdatePasswordSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideUpdatePasswordSuccessModal());
  }

  render () {
    return (
      <Modal
        isOpen={this.props.show}
        className="redux-auth-modal update-password-success-modal"
        onRequestClose={this.close.bind(this)}>
        <h2 className="redux-auth-modal-header">
          Success
          <button className="close-modal" onClick={this.close.bind(this)}>close</button>
        </h2>

        <div className="redux-auth-modal-body">
          Your password has been successfully changed.
        </div>

        <div className="redux-auth-modal-footer">
          <button
            onClick={this.close.bind(this)}
            className="update-password-success-modal-close">
            Ok
          </button>
        </div>
      </Modal>
    );
  }
}

export default UpdatePasswordSuccessModal;
