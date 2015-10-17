import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { hideFirstTimeLoginErrorModal } from "../../actions/ui";

@connect()
class FirstTimeLoginErrorModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideFirstTimeLoginErrorModal());
  }

  render () {
    return (
      <Modal show={this.props.show}
             onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation Error</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>There was a problem confirming your account. Please try again.</p>
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

export default FirstTimeLoginErrorModal;
