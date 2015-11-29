import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { hideOAuthSignInErrorModal } from "../../../actions/ui";

class OAuthSignInErrorModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideOAuthSignInErrorModal());
  }

  render () {
    return (
      <Modal
        isOpen={this.props.show}
        className="redux-auth-modal oauth-sign-in-error-modal"
        onRequestClose={this.close.bind(this)}>
        <h2 className="redux-auth-modal-header">
          OAuth Sign In Error
          <button className="close-modal" onClick={this.close.bind(this)}>close</button>
        </h2>

        <div className="redux-auth-modal-body">
          <i style={{
            position: "absolute",
            left: 0,
            top: 2}}>{"✗"}</i> There was an error
          authenticating your account. Please try again.
        </div>

        <div className="redux-auth-modal-footer">
          <button
            onClick={this.close.bind(this)}
            className="oauth-sign-in-error-modal-close">
            Ok
          </button>
        </div>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(OAuthSignInErrorModal);
