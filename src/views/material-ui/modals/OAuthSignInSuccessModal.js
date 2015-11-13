import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { hideOAuthSignInSuccessModal } from "../../../actions/ui";

@connect(({auth}) => ({auth}))
class OAuthSignInSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideOAuthSignInSuccessModal());
  }

  render () {
    return (
      <Modal show={this.props.show}
             className="oauth-sign-in-success-modal"
             onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>You are now signed in via {this.props.auth.getIn(["user", "attributes", "provider"])}.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={this.close.bind(this)}
            className="oauth-sign-in-success-modal-close">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default OAuthSignInSuccessModal;
