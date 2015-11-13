import React, { PropTypes } from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { hideEmailSignInSuccessModal } from "../../actions/ui";

@connect(({auth}) => ({auth}))
class EmailSignInSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideEmailSignInSuccessModal());
  }

  render () {
    return (
      <Modal
        show={this.props.show}
        onHide={this.close.bind(this)}
        className="email-sign-in-success-modal">
        <Modal.Header closeButton>
          <Modal.Title>Welcome Back</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>You are now signed in as {this.props.auth.getIn(["user", "attributes", "email"])}.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={this.close.bind(this)}
            className="email-sign-in-success-modal-close">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EmailSignInSuccessModal;
