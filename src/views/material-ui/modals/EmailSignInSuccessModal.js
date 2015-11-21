import React, { PropTypes } from "react";
import { Dialog, FlatButton } from "material-ui";
import { connect } from "react-redux";
import { hideEmailSignInSuccessModal } from "../../../actions/ui";

@connect(({auth}) => ({auth}))
class EmailSignInSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideEmailSignInSuccessModal());
  }

  render () {
    return (
      <Dialog
        open={this.props.show}
        title="Welcome Back"
        actions={[
          <FlatButton
            onClick={this.close.bind(this)}
            key="close"
            className="email-sign-in-success-modal-close">
            Close
          </FlatButton>
        ]}
        contentClassName="redux-auth-modal email-sign-in-success-modal">
        <p>You are now signed in as {this.props.auth.getIn(["user", "attributes", "email"])}.</p>
      </Dialog>
    );
  }
}

export default EmailSignInSuccessModal;
