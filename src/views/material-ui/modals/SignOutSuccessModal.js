import React from "react";
import { hideSignOutSuccessModal } from "../../../actions/ui";
import Modal from "./Modal";

class SignOutSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass="sign-out-success-modal"
        closeAction={hideSignOutSuccessModal}
        title="Goodbye!">
        You have been successfully signed out.
      </Modal>
    );
  }
}

export default SignOutSuccessModal;
