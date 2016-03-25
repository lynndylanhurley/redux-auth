import React from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import { hideEmailSignInSuccessModal } from "redux-auth/actions/ui";

class EmailSignInSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        title="Welcome Back"
        closeAction={hideEmailSignInSuccessModal}
        containerClass="email-sign-in-success-modal">
        <p>
          You are now signed in
          as {this.props.auth.getIn(["user", "attributes", "email"])}.
        </p>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(EmailSignInSuccessModal);
