import React from "react";
import { connect } from "react-redux";
import { hidePasswordResetRequestSuccessModal } from "../../../actions/ui";
import Modal from "./Modal";

@connect(({auth}) => ({auth}))
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

export default RequestPasswordResetSuccessModal;
