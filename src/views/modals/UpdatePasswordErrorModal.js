import React, { PropTypes } from "react";
import { Modal, Button } from "react-bootstrap";
import { hideUpdatePasswordErrorModal } from "../../actions/ui";
import { connect } from "react-redux";
import ErrorList from "../ErrorList";

@connect(({auth}) => ({auth}))
class UpdatePasswordErrorModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideUpdatePasswordErrorModal());
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
        show={this.props.show}
        className="update-password-error-modal"
        onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ErrorList errors={this.props.auth.getIn(["updatePassword", this.getEndpoint(), "errors", "full_messages"])} />
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={this.close.bind(this)}
            className="update-password-error-modal-close">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default UpdatePasswordErrorModal;
