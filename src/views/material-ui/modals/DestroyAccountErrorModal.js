import React from "react";
import Modal from "./Modal";
import { hideDestroyAccountErrorModal } from "../../../actions/ui";

class DestroyAccountErrorModal extends React.Component {
  render () {
    return (
      <Modal
        {...this.props}
        containerClass="destroy-account-error-modal"
        closeAction={hideDestroyAccountErrorModal}
        errorAddr={["destroyAccount", "errors"]}
        title="Error" />
    );
  }
}

export default DestroyAccountErrorModal;
