import React from "react";
import { connect } from "react-redux";
import { hideEmailSignInSuccessModal } from "../../../actions/ui";
import Modal from "./Modal";

class EmailSignInSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        show={this.props.show}
        containerClass="email-sign-in-success-modal"
        closeAction={hideEmailSignInSuccessModal}
        closeBtnLabel="Close"
        title="Welcome Back">
        <p>You are now signed in as {this.props.auth.getIn(["user", "attributes", "email"])}.</p>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(EmailSignInSuccessModal);

