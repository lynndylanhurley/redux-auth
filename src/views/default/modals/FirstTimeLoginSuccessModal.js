import React from "react";
import { hideFirstTimeLoginSuccessModal } from "../../../actions/ui";
import Modal from "./Modal";
import { connect } from "react-redux";

class FirstTimeLoginSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        show={this.props.show}
        containerClass="first-time-login-success-modal"
        title={`Welcome ${this.props.auth.getIn(["user", "attributes", "email"])}!`}
        closeBtnLabel="Close"
        closeAction={hideFirstTimeLoginSuccessModal}>
        <p>Your account has been confirmed.</p>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(FirstTimeLoginSuccessModal);
