import React from "react";
import { connect } from "react-redux";
import { hideOAuthSignInSuccessModal } from "../../../actions/ui";
import Modal from "./Modal";

@connect(({auth}) => ({auth}))
class OAuthSignInSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass="oauth-sign-in-success-modal"
        title="Welcome"
        closeAction={hideOAuthSignInSuccessModal}>
        <p>You are now signed in via {this.props.auth.getIn(["user", "attributes", "provider"])}.</p>
      </Modal>
    );
  }
}

export default OAuthSignInSuccessModal;
