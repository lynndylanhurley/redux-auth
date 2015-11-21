import React, { PropTypes } from "react";
import { Dialog, FlatButton } from "material-ui";
import { connect } from "react-redux";
import { hideUpdatePasswordSuccessModal } from "../../../actions/ui";

@connect()
class UpdatePasswordSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideUpdatePasswordSuccessModal());
  }

  render () {
    return (
      <Dialog
        open={this.props.show}
        contentClassName="redux-auth-modal update-password-success-modal"
        title="Success"
        actions={[
          <FlatButton
            key="close"
            onClick={this.close.bind(this)}
            className="update-password-success-modal-close">
            Ok
          </FlatButton>
        ]}>
        <p>Your password has been successfully changed.</p>
      </Dialog>
    );
  }
}

export default UpdatePasswordSuccessModal;
