import React from "react";
import { connect } from "react-redux";
import { hidePasswordResetRequestSuccessModal } from "redux-auth/actions/ui";
import Modal from "./Modal";

class RequestPasswordResetSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass="request-password-reset-success-modal"
        closeAction={hidePasswordResetRequestSuccessModal}
        title="Password Reset Request Success">
        <p>{this.props.auth.getIn(["ui", "requestPasswordResetSuccessMessage"])}</p>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(RequestPasswordResetSuccessModal);
