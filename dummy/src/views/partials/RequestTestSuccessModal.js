import React, { PropTypes } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { dismissRequestTestSuccessModal } from "../../actions/request-test-buttons";

class RequestTestSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool,
    url: PropTypes.string
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(dismissRequestTestSuccessModal());
  }

  render () {
    return (
      <Modal show={this.props.show}
             onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Ajax Request Success</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Request to {this.props.url} was successful.
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

export default connect(({demoButtons}) => ({
  show: demoButtons.get("showSuccessModal"),
  url: demoButtons.get("lastRequestUrl")
}))(RequestTestSuccessModal);
