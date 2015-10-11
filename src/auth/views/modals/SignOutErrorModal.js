import React, { PropTypes } from "react";
import { Modal, Button } from "react-bootstrap";
import { hideSignOutErrorModal } from "../../actions/ui";
import { connect } from "react-redux";

@connect()
class SignOutErrorModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideSignOutErrorModal());
  }

  render () {
    return (
      <Modal show={this.props.show}
             onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Out Error</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            The server encountered an error while trying to sign you out. Your
            account information has been wiped from this browser, but you may
            want to sign in and then sign back out again to resolve any issues.
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

export default SignOutErrorModal;
