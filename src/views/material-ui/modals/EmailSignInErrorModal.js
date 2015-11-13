import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { hideEmailSignInErrorModal } from "../../../actions/ui";
import { Modal, Button } from "react-bootstrap";
import ErrorList from "../ErrorList";

@connect(({auth}) => ({auth}))
class EmailSignInErrorModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideEmailSignInErrorModal());
  }

  render () {
    return (
      <Modal show={this.props.show}
             className="email-sign-in-error-modal"
             onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In Error</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ErrorList errors={this.props.auth.getIn(["emailSignIn", "errors"])} />
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.close.bind(this)} className="email-sign-in-error-modal-close">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EmailSignInErrorModal;
