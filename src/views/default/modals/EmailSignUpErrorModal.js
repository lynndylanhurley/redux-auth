import React, { PropTypes } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { hideEmailSignUpErrorModal } from "../../../actions/ui";
import ErrorList from "../ErrorList";

@connect(({auth}) => ({auth}))
class EmailSignUpErrorModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideEmailSignUpErrorModal());
  }

  getEndpoint () {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  render () {
    return (
      <Modal
        isOpen={this.props.show}
        className="redux-auth-modal email-sign-up-error-modal"
        onRequestClose={this.close.bind(this)}>
        <h2 className="redux-auth-modal-header">
          Sign Up Error
          <button className="close-modal" onClick={this.close.bind(this)}>close</button>
        </h2>

        <div className="redux-auth-modal-body">
          <ErrorList errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "full_messages"])} />
        </div>

        <div className="redux-auth-modal-footer">
          <button
            className="email-sign-up-error-modal-close"
            onClick={this.close.bind(this)}>
            Ok
          </button>
        </div>
      </Modal>
    );
  }
}

export default EmailSignUpErrorModal;
