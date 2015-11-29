import React, { PropTypes } from "react";
import Modal from "react-modal";
import { hideEmailSignUpSuccessModal } from "../../../actions/ui";
import { connect } from "react-redux";

class EmailSignUpSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideEmailSignUpSuccessModal());
  }

  render () {
    return (
      <Modal
        className="redux-auth-modal email-sign-up-success-modal"
        isOpen={this.props.show}
        onRequestClose={this.close.bind(this)}>
        <h2 className="redux-auth-modal-header">
          Sign Up Success
          <button className="close-modal" onClick={this.close.bind(this)}>close</button>
        </h2>

        <div className="redux-auth-modal-body">
          A confirmation email was sent to your account
          at {this.props.auth.getIn(["ui", "emailSignUpAddress"])}. Follow the
          instructions in the email to complete registration.
        </div>

        <div className="redux-auth-modal-footer">
          <button
            className="email-sign-up-success-modal-close"
            onClick={this.close.bind(this)}>
            Ok
          </button>
        </div>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(EmailSignUpSuccessModal);
