import React, { PropTypes } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { hideEmailSignInSuccessModal } from "../../../actions/ui";

class EmailSignInSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideEmailSignInSuccessModal());
  }

  render () {
    return (
      <Modal
        isOpen={this.props.show}
        onRequestClose={this.close.bind(this)}
        className="redux-auth-modal email-sign-in-success-modal">
        <h2 className="redux-auth-modal-header">
          Welcome Back
          <button className="close-modal" onClick={this.close.bind(this)}>close</button>
        </h2>

        <div className="redux-auth-modal-body">
          You are now signed in as {this.props.auth.getIn(["user", "attributes", "email"])}.
        </div>

        <div className="redux-auth-modal-footer">
          <button
            onClick={this.close.bind(this)}
            className="email-sign-in-success-modal-close">
            Close
          </button>
        </div>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(EmailSignInSuccessModal);
