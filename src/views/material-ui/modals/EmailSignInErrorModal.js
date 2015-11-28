import React from "react";
import { hideEmailSignInErrorModal } from "../../../actions/ui";
import Modal from "./Modal";

class EmailSignInErrorModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        closeAction={hideEmailSignInErrorModal}
        containerClass="email-sign-in-error-modal"
        title="Sign In Error"
        errorAddr={["emailSignIn", "errors"]} />
    );
  }
}

export default EmailSignInErrorModal;
