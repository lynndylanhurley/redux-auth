import React from "react";
import { hideUpdatePasswordErrorModal } from "../../../actions/ui";
import Modal from "./Modal";

class UpdatePasswordErrorModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass="update-password-error-modal"
        closeAction={hideUpdatePasswordErrorModal}
        title="Error"
        errorAddr={["updatePassword", "errors", "full_messages"]} />
    );
  }
}

export default UpdatePasswordErrorModal;
