import React from "react";
import { connect } from "react-redux";
import { hideFirstTimeLoginSuccessModal } from "../../../actions/ui";
import Modal from "./Modal";

@connect(({auth}) => ({auth}))
class FirstTimeLoginSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass="first-time-login-success-modal"
        closeAction={hideFirstTimeLoginSuccessModal}
        title={`Welcome ${this.props.auth.getIn(["user", "attributes", "email"])}!`}>
        <p>Your account has been confirmed.</p>
      </Modal>
    );
  }
}

export default FirstTimeLoginSuccessModal;
