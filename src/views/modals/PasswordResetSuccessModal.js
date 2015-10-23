import React, { PropTypes } from "react";
import { Modal, Button, Glyphicon } from "react-bootstrap";
import ButtonLoader from "../ButtonLoader";
import Input from "../Input";
import { connect } from "react-redux";
import { hidePasswordResetSuccessModal } from "../../actions/ui";
import {
  updatePasswordModal,
  updatePasswordModalFormUpdate
} from "../../actions/update-password-modal";

@connect(({auth}) => ({auth}))
class PasswordResetSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool,
    icon: PropTypes.node
  }

  static defaultProps = {
    show: false,
    icon: <Glyphicon glyph="lock" />
  }

  handleInput (key, val) {
    this.props.dispatch(updatePasswordModalFormUpdate(key, val));
  }

  handleSubmit () {
    let formData = this.props.auth.getIn(["updatePasswordModal", "form"]).toJS();
    console.log("form data", formData);
    this.props.dispatch(updatePasswordModal(formData));
  }

  close () {
    this.props.dispatch(hidePasswordResetSuccessModal());
  }

  render () {
    let loading = this.props.auth.getIn(["updatePasswordModal", "loading"]);

    return (
      <Modal show={this.props.show}
             onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Your Password</Modal.Title>
        </Modal.Header>

        <form>
          <Modal.Body>
            <Input type="password"
                  label="Password"
                  placeholder="Password"
                  disabled={loading}
                  value={this.props.auth.getIn(["updatePasswordModal", "form", "password"])}
                  errors={this.props.auth.getIn(["updatePasswordModal", "errors", "password"])}
                  onChange={this.handleInput.bind(this, "password")} />

            <Input type="password"
                  label="Password Confirmation"
                  placeholder="Password Confirmation"
                  disabled={loading}
                  value={this.props.auth.getIn(["updatePasswordModal", "form", "password_confirmation"])}
                  errors={this.props.auth.getIn(["updatePasswordModal", "errors", "password_confirmation"])}
                  onChange={this.handleInput.bind(this, "password_confirmation")} />
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>
              Cancel
            </Button>

            <ButtonLoader {...this.props}
                          loading={loading}
                          type="submit"
                          icon={this.props.icon}
                          onClick={this.handleSubmit.bind(this)} />
          </Modal.Footer>
        </form>
      </Modal>
    );
  }
}

export default PasswordResetSuccessModal;

