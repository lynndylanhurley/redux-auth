import React, { PropTypes } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { hideDestroyAccountErrorModal } from "../../../actions/ui";
import ErrorList from "../ErrorList";

class DestroyAccountErrorModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideDestroyAccountErrorModal());
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
        className="redux-auth-modal destroy-account-error-modal"
        isOpen={this.props.show}
        onRequestClose={this.close.bind(this)}>
        <h2 className="redux-auth-modal-header">
          Error
          <button className="close-modal" onClick={this.close.bind(this)}>close</button>
        </h2>

        <div className="redux-auth-modal-body">
          <ErrorList errors={this.props.auth.getIn(["destroyAccount", this.getEndpoint(), "errors"])} />
        </div>

        <div className="redux-auth-modal-footer">
          <button
            className="destroy-account-error-modal-close"
            onClick={this.close.bind(this)}>
            Ok
          </button>
        </div>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(DestroyAccountErrorModal);
