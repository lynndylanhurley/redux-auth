import React, { PropTypes } from "react";
import { Button, Modal } from "react-bootstrap";
import { hideEmailSignUpSuccessModal } from "../../actions/ui";
import { connect } from "react-redux";

@connect(({auth}) => ({auth}))
class EmailSignUpSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideEmailSignUpSuccessModal());
  }

  render () {
    return (
      <Modal
        className="email-sign-up-success-modal"
        show={this.props.show}
        onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up Success</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            A confirmation email was sent to your account
            at {this.props.auth.getIn(["ui", "emailSignUpAddress"])}. Follow the
            instructions in the email to complete registration.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            className="email-sign-up-success-modal-close"
            onClick={this.close.bind(this)}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EmailSignUpSuccessModal;
