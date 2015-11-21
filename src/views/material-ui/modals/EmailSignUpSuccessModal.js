import React, { PropTypes } from "react";
import { Dialog, FlatButton } from "material-ui";
import { hideEmailSignUpSuccessModal } from "../../../actions/ui";
import { connect } from "react-redux";

@connect(({auth}) => ({auth}))
class EmailSignUpSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideEmailSignUpSuccessModal());
  }

  render () {
    return (
      <Dialog
        contentClassName="redux-auth-modal email-sign-up-success-modal"
        open={this.props.show}
        title="Sign Up Success"
        actions={[
          <FlatButton
            key="close"
            className="email-sign-up-success-modal-close"
            onClick={this.close.bind(this)}>
            Ok
          </FlatButton>
        ]}>
        <p>
          A confirmation email was sent to your account
          at {this.props.auth.getIn(["ui", "emailSignUpAddress"])}. Follow the
          instructions in the email to complete registration.
        </p>
      </Dialog>
    );
  }
}

export default EmailSignUpSuccessModal;
