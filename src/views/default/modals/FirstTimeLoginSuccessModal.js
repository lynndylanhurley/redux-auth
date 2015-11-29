import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { hideFirstTimeLoginSuccessModal } from "../../../actions/ui";

class FirstTimeLoginSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideFirstTimeLoginSuccessModal());
  }

  render () {
    return (
      <Modal
        isOpen={this.props.show}
        className="redux-auth-modal first-time-login-success-modal"
        onRequestClose={this.close.bind(this)}>
        <h2 className="redux-auth-modal-header">
          Welcome {this.props.auth.getIn(["user", "attributes", "email"])}!
          <button className="close-modal" onClick={this.close.bind(this)}>close</button>
        </h2>

        <div className="redux-auth-modal-body">
          Your account has been confirmed.
        </div>

        <div className="redux-auth-modal-footer">
          <button
            className="first-time-login-success-modal-close"
            onClick={this.close.bind(this)}>
            Close
          </button>
        </div>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(FirstTimeLoginSuccessModal);
