import React, { PropTypes } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { hideSignOutSuccessModal } from "../../actions/ui";

@connect()
class SignOutSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideSignOutSuccessModal());
  }

  render () {
    return (
      <Modal show={this.props.show}
             onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Goodbye!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          You have been successfully signed out.
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

export default SignOutSuccessModal;
