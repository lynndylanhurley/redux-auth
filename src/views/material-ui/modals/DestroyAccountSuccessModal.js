import React from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import { hideDestroyAccountSuccessModal } from "redux-auth/actions/ui";

class DestroyAccountSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        title="Destroy Account Success"
        containerClass="destroy-account-success-modal"
        closeAction={hideDestroyAccountSuccessModal}>
        <p>{this.props.auth.getIn(["ui", "destroyAccountMessage"])}</p>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(DestroyAccountSuccessModal);
