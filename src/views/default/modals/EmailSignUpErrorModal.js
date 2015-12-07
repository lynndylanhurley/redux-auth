import React from "react";
import { hideEmailSignUpErrorModal } from "../../../actions/ui";
import Modal from "./Modal";

class EmailSignUpErrorModal extends React.Component {
  render () {
    return (
      <Modal
        show={this.props.show}
        containerClass="email-sign-up-error-modal"
        title="Sign Up Error"
        errorAddr={["emailSignUp", "errors", "full_messages"]}
        closeAction={hideEmailSignUpErrorModal} />
    );
  }
}

export default EmailSignUpErrorModal;
