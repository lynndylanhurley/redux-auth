import React from "react";
import * as Colors from "material-ui/styles/colors";
import { hideOAuthSignInErrorModal } from "../../../actions/ui";
import AlertError from "material-ui/svg-icons/alert/error";
import Modal from "./Modal";

class OAuthSignInErrorModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass="oauth-sign-in-error-modal"
        closeAction={hideOAuthSignInErrorModal}
        title="OAuth Sign In Error">
        <p
          className="inline-error-item"
          style={{paddingLeft: "20px", position: "relative", marginBottom: "28px"}}>
          <AlertError
            viewBox="0 0 50 50"
            color={Colors.red500}
            style={{
              position: "absolute",
              left: 0,
              top: 3}} />
          There was an error authenticating your account. Please try again.
        </p>
      </Modal>
    );
  }
}

export default OAuthSignInErrorModal;
