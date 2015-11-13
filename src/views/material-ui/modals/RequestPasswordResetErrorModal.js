import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { hidePasswordResetRequestErrorModal } from "../../../actions/ui";
import ErrorList from "../ErrorList";

@connect(({auth}) => ({auth}))
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

  render () {
    return (
      <Modal
        show={this.props.show}
        className="request-password-reset-error-modal"
        onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ErrorList errors={this.props.auth.getIn(["requestPasswordReset", "errors"])} />
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={this.close.bind(this)}
            className="request-password-reset-error-modal-close">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default RequestPasswordResetErrorModal;

