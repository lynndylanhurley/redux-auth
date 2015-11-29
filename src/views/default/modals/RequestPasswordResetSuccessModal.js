import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { hidePasswordResetRequestSuccessModal } from "../../../actions/ui";

class RequestPasswordResetSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hidePasswordResetRequestSuccessModal());
  }

  render () {
    return (
      <Modal
        isOpen={this.props.show}
        className="redux-auth-modal request-password-reset-success-modal"
        onRequestClose={this.close.bind(this)}>
        <h2 className="redux-auth-modal-header">
          Password Reset Request Success
          <button className="close-modal" onClick={this.close.bind(this)}>close</button>
        </h2>

        <div className="redux-auth-modal-body">
          {this.props.auth.getIn(["ui", "requestPasswordResetSuccessMessage"])}
        </div>

        <div className="redux-auth-modal-footer">
          <button
            onClick={this.close.bind(this)}
            className="request-password-reset-success-modal-close">
            Ok
          </button>
        </div>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(RequestPasswordResetSuccessModal);
