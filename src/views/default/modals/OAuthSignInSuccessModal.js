import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { hideOAuthSignInSuccessModal } from "../../../actions/ui";

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
      <Modal
        isOpen={this.props.show}
        className="redux-auth-modal oauth-sign-in-success-modal"
        onRequestClose={this.close.bind(this)}>
        <h2 className="redux-auth-modal-header">
          Welcome
          <button className="close-modal" onClick={this.close.bind(this)}>close</button>
        </h2>

        <div className="redux-auth-modal-body">
          <p>You are now signed in via {this.props.auth.getIn(["user", "attributes", "provider"])}.</p>
        </div>

        <div className="redux-auth-modal-footer">
          <button
            onClick={this.close.bind(this)}
            className="oauth-sign-in-success-modal-close">
            Close
          </button>
        </div>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(OAuthSignInSuccessModal);
