import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Modal, Button, Glyphicon } from "react-bootstrap";
import { hideOAuthSignInErrorModal } from "../../../actions/ui";

@connect(({auth}) => ({auth}))
class OAuthSignInErrorModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideOAuthSignInErrorModal());
  }

  render () {
    return (
      <Modal
        show={this.props.show}
        className="oauth-sign-in-error-modal"
        onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>OAuth Sign In Error</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            <Glyphicon glyph="exclamation-sign" /> There was an error
            authenticating your account. Please try again.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={this.close.bind(this)}
            className="oauth-sign-in-error-modal-close">
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default OAuthSignInErrorModal;
