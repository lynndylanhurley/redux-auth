import React, { PropTypes } from "react";
import { Dialog, FlatButton } from "material-ui";
import { hideSignOutErrorModal } from "../../../actions/ui";
import { connect } from "react-redux";

@connect()
class SignOutErrorModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideSignOutErrorModal());
  }

  render () {
    return (
      <Dialog
        open={this.props.show}
        contentClassName="redux-auth-modal sign-out-error-modal"
        title="Sign Out Error"
        actions={[
          <FlatButton
            key="close"
            className="sign-out-error-modal-close"
            onClick={this.close.bind(this)}>
            Ok
          </FlatButton>
        ]}>
        <p>
          The server encountered an error while trying to sign you out. Your
          account information has been wiped from this browser, but you may
          want to sign in and then sign back out again to resolve any issues.
        </p>
      </Dialog>
    );
  }
}

export default SignOutErrorModal;
