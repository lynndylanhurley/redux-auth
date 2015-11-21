import React, { PropTypes } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { hideDestroyAccountSuccessModal } from "../../../actions/ui";

@connect(({auth}) => ({auth}))
class DestroyAccountSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideDestroyAccountSuccessModal());
  }

  render () {
    return (
      <Modal
        isOpen={this.props.show}
        className="redux-auth-modal destroy-account-success-modal"
        onRequestClose={this.close.bind(this)}>
        <h2 className="redux-auth-modal-header">
          Destroy Account Success
          <button className="close-modal" onClick={this.close.bind(this)}>close</button>
        </h2>

        <div className="redux-auth-modal-body">
          {this.props.auth.getIn(["ui", "destroyAccountMessage"])}
        </div>

        <div className="redux-auth-modal-footer">
          <button
            className="destroy-account-success-modal-close"
            onClick={this.close.bind(this)}>
            Ok
          </button>
        </div>
      </Modal>
    );
  }
}

export default DestroyAccountSuccessModal;
