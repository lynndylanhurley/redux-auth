import React from "react";
import { hideEmailSignUpErrorModal } from "../../../actions/ui";
import Modal from "./Modal";

class EmailSignUpErrorModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        title="Sign Up Error"
        containerClass="email-sign-up-form-error-modal"
        closeAction={hideEmailSignUpErrorModal}
        errorAddr={["emailSignUp", "errors", "full_messages"]} />
    );
  }
}

export default EmailSignUpErrorModal;
