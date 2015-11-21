import React, { PropTypes } from "react";
import ButtonLoader from "../ButtonLoader";
import Modal from "react-modal";
import Input from "../Input";
import { connect } from "react-redux";
import { hidePasswordResetSuccessModal } from "../../../actions/ui";
import {
  updatePasswordModal,
  updatePasswordModalFormUpdate
} from "../../../actions/update-password-modal";

@connect(({auth}) => ({auth}))
class PasswordResetSuccessModal extends React.Component {
  static propTypes = {
    endpoint: PropTypes.string,
    show: PropTypes.bool,
    inputProps: PropTypes.object
  }

  static defaultProps = {
    show: false,
    inputProps: {}
  }

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
      <Modal
        isOpen={this.props.show}
        className="redux-auth-modal password-reset-success-modal"
        onRequestClose={this.close.bind(this)}>
        <h2 className="redux-auth-modal-header">
          Reset Your Password
          <button className="close-modal" onClick={this.close.bind(this)}>close</button>
        </h2>

        <form>
          <div className="redux-auth-modal-body">
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
          </div>

          <div className="redux-auth-modal-footer">
            <button
              className="password-reset-success-modal-close"
              onClick={this.close.bind(this)}
              {...this.props.inputProps.cancel}>
              Cancel
            </button>

            <ButtonLoader
              loading={loading}
              type="submit"
              className="password-reset-success-modal-submit"
              onClick={this.handleSubmit.bind(this)}
              {...this.props.inputProps.submit} />
          </div>
        </form>
      </Modal>
    );
  }
}

export default PasswordResetSuccessModal;

