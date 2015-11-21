import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Dialog, FlatButton } from "material-ui";
import { hidePasswordResetRequestSuccessModal } from "../../../actions/ui";

@connect(({auth}) => ({auth}))
class RequestPasswordResetSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hidePasswordResetRequestSuccessModal());
  }

  render () {
    return (
      <Dialog
        open={this.props.show}
        contentClassName="redux-auth-modal request-password-reset-success-modal"
        title="Password Reset Request Success"
        actions={[
          <FlatButton
            key="close"
            onClick={this.close.bind(this)}
            className="request-password-reset-success-modal-close">
            Ok
          </FlatButton>
        ]}>
        <p>{this.props.auth.getIn(["ui", "requestPasswordResetSuccessMessage"])}</p>
      </Dialog>
    );
  }
}

export default RequestPasswordResetSuccessModal;
