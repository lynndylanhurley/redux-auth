import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { hideFirstTimeLoginSuccessModal } from "../../actions/ui";

@connect(({auth, authUi}) => ({auth, authUi}))
class FirstTimeLoginSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideFirstTimeLoginSuccessModal());
  }

  render () {
    return (
      <Modal show={this.props.show}
             onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>
            Welcome {this.props.auth.getIn(["user", "attributes", "email"])}!
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Your account has been confirmed.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.close.bind(this)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default FirstTimeLoginSuccessModal;
