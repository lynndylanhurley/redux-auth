import React from "react";
import { hidePasswordResetRequestErrorModal } from "../../../actions/ui";
import Modal from "./Modal";

class RequestPasswordResetErrorModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass="request-password-reset-error-modal"
        closeAction={hidePasswordResetRequestErrorModal}
        title="Error"
        errorAddr={["requestPassswordReset", "errors"]} />
    );
  }
}

export default RequestPasswordResetErrorModal;
