import React, { PropTypes } from "react";
import { Dialog, FlatButton } from "material-ui";
import { connect } from "react-redux";
import { hideSignOutSuccessModal } from "../../../actions/ui";

@connect()
class SignOutSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideSignOutSuccessModal());
  }

  render () {
    return (
      <Dialog
        open={this.props.show}
        contentClassName="redux-auth-modal sign-out-success-modal"
        title="Goodbye!"
        actions={[
          <FlatButton
            key="close"
            onClick={this.close.bind(this)}
            className="sign-out-success-modal-close">
            Ok
          </FlatButton>
        ]}>
        You have been successfully signed out.
      </Dialog>
    );
  }
}

export default SignOutSuccessModal;
