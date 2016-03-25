import React from "react";
import { hideEmailSignUpSuccessModal } from "redux-auth/actions/ui";
import { connect } from "react-redux";
import Modal from "./Modal";

class EmailSignUpSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass="email-sign-up-success-modal"
        closeAction={hideEmailSignUpSuccessModal}
        title="Sign Up Success">
        <p>
          A confirmation email was sent to your account
          at {this.props.auth.getIn(["ui", "emailSignUpAddress"])}. Follow the
          instructions in the email to complete registration.
        </p>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(EmailSignUpSuccessModal);
