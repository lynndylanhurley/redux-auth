import React from "react";
import { hideEmailSignInErrorModal } from "../../../actions/ui";
import Modal from "./Modal";

class EmailSignInErrorModal extends React.Component {
  render () {
    return (
      <Modal
        show={this.props.show}
        containerClass="email-sign-in-error-modal"
        closeAction={hideEmailSignInErrorModal}
        title="Sign In Error"
        errorAddr={["emailSignIn", "errors"]} />
    );
  }
}

export default EmailSignInErrorModal;
