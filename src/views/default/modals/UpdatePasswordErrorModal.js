import React from "react";
import { hideUpdatePasswordErrorModal } from "../../../actions/ui";
import Modal from "./Modal";

class UpdatePasswordErrorModal extends React.Component {
  render () {
    return (
      <Modal
        show={this.props.show}
        containerClass="update-password-error-modal"
        title="Error"
        closeAction={hideUpdatePasswordErrorModal}
        errorAddr={["updatePassword", "errors", "full_messages"]} />
    );
  }
}

export default UpdatePasswordErrorModal;
