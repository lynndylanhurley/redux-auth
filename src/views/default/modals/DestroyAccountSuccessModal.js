import React from "react";
import { connect } from "react-redux";
import { hideDestroyAccountSuccessModal } from "../../../actions/ui";
import Modal from "./Modal";

class DestroyAccountSuccessModal extends React.Component {
  render () {
    return (
      <Modal
        show={this.props.show}
        containerClass="destroy-account-success-modal"
        closeAction={hideDestroyAccountSuccessModal}
        title="Destroy Account Success">
        <p>{this.props.auth.getIn(["ui", "destroyAccountMessage"])}</p>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(DestroyAccountSuccessModal);
