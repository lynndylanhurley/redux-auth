import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { hidePasswordResetRequestErrorModal } from "../../../actions/ui";
import ErrorList from "../ErrorList";

class RequestPasswordResetErrorModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hidePasswordResetRequestErrorModal());
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
        className="redux-auth-modal request-password-reset-error-modal"
        onRequestClose={this.close.bind(this)}>
        <h2 className="redux-auth-modal-header">
          Error
          <button className="close-modal" onClick={this.close.bind(this)}>close</button>
        </h2>

        <div className="redux-auth-modal-body">
          <ErrorList errors={this.props.auth.getIn(["requestPasswordReset", this.getEndpoint(), "errors"])} />
        </div>

        <div className="redux-auth-modal-footer">
          <button
            onClick={this.close.bind(this)}
            className="request-password-reset-error-modal-close">
            Ok
          </button>
        </div>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(RequestPasswordResetErrorModal);
