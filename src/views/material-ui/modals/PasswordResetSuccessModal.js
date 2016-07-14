import React, { PropTypes } from "react";
import ActionLock from "material-ui/svg-icons/action/lock";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ButtonLoader from "../ButtonLoader";
import Input from "../Input";
import { connect } from "react-redux";
import { hidePasswordResetSuccessModal } from "../../../actions/ui";
import {
  updatePasswordModal,
  updatePasswordModalFormUpdate
} from "../../../actions/update-password-modal";

class PasswordResetSuccessModal extends React.Component {
  static propTypes = {
    endpoint: PropTypes.string,
    show: PropTypes.bool,
    inputProps: PropTypes.object
  };

  static defaultProps = {
    show: false,
    inputProps: {}
  };

  getEndpoint () {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  handleInput (key, val) {
    this.props.dispatch(updatePasswordModalFormUpdate(this.getEndpoint(), key, val));
  }

  handleSubmit () {
    let formData = this.props.auth.getIn(["updatePasswordModal", this.getEndpoint(), "form"]).toJS();
    this.props.dispatch(updatePasswordModal(formData, this.getEndpoint()));
  }

  close () {
    this.props.dispatch(hidePasswordResetSuccessModal());
  }

  render () {
    let endpoint = this.getEndpoint();
    let loading = this.props.auth.getIn(["updatePasswordModal", endpoint, "loading"]);

    return (
      <MuiThemeProvider>
        <Dialog
          open={this.props.show}
          contentClassName="redux-auth-modal password-reset-success-modal"
          actions={[
            <FlatButton
              key="cancel"
              className="password-reset-success-modal-close"
              onClick={this.close.bind(this)}
              secondary={true}
              {...this.props.inputProps.cancel}>
              Cancel
            </FlatButton>,
            <ButtonLoader
              key="submit"
              {...this.props}
              loading={loading}
              type="submit"
              primary={true}
              className="password-reset-success-modal-submit"
              icon={ActionLock}
              onClick={this.handleSubmit.bind(this)}
              {...this.props.inputProps.submit} />
          ]}
          title="Reset Your Password">
          <form>
            <Input
              type="password"
              label="Password"
              placeholder="Password"
              disabled={loading}
              className="password-reset-success-modal-password"
              value={this.props.auth.getIn(["updatePasswordModal", endpoint, "form", "password"])}
              errors={this.props.auth.getIn(["updatePasswordModal", endpoint, "errors", "password"])}
              onChange={this.handleInput.bind(this, "password")}
              {...this.props.inputProps.password} />

            <Input
              type="password"
              label="Password Confirmation"
              placeholder="Password Confirmation"
              disabled={loading}
              className="password-reset-success-modal-password-confirmation"
              value={this.props.auth.getIn(["updatePasswordModal", endpoint, "form", "password_confirmation"])}
              errors={this.props.auth.getIn(["updatePasswordModal", endpoint, "errors", "password_confirmation"])}
              onChange={this.handleInput.bind(this, "password_confirmation")}
              {...this.props.inputProps.passwordConfirmation} />
          </form>
        </Dialog>
      </MuiThemeProvider>
    );
  }
}

export default connect(({auth}) => ({auth}))(PasswordResetSuccessModal);
