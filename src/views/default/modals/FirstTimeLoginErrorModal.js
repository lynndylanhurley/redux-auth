import React from "react";
import { hideFirstTimeLoginErrorModal } from "../../../actions/ui";
import Modal from "./Modal";

class FirstTimeLoginErrorModal extends React.Component {
  render () {
    return (
      <Modal
        show={this.props.show}
        containerClass="first-time-login-error-modal"
        closeAction={hideFirstTimeLoginErrorModal}
        title="Confirmation Error">
        <p>There was a problem confirming your account. Please try again.</p>
      </Modal>

    );
  }
}

export default FirstTimeLoginErrorModal;
