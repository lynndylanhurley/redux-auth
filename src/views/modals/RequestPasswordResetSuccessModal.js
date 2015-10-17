import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { hidePasswordResetRequestSuccessModal } from "../../actions/ui";

@connect(({authUi}) => ({authUi}))
class RequestPasswordResetSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hidePasswordResetRequestSuccessModal());
  }

  render () {
    return (
      <Modal show={this.props.show}
             onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Password Reset Request Success</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            {this.props.authUi.get("requestPasswordResetSuccessMessage")}
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.close.bind(this)}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default RequestPasswordResetSuccessModal;
