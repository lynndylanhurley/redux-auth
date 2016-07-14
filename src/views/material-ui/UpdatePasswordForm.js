import React, { PropTypes } from "react";
import Input from "./Input";
import ButtonLoader from "./ButtonLoader";
import ActionLock from "material-ui/svg-icons/action/lock";
import { updatePassword, updatePasswordFormUpdate } from "../../actions/update-password";
import { connect } from "react-redux";

class UpdatePasswordForm extends React.Component {
  static propTypes = {
    endpoint: PropTypes.string,
    inputProps: PropTypes.shape({
      password: PropTypes.object,
      passwordConfirmation: PropTypes.object,
      submit: PropTypes.object
    })
  };

  static defaultProps = {
    inputProps: {
      password: {},
      passwordConfirmation: {},
      submit: {}
    }
  };

  getEndpoint () {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  handleInput (key, val) {
    this.props.dispatch(updatePasswordFormUpdate(this.getEndpoint(), key, val));
  }

  handleSubmit (ev) {
    ev.preventDefault();
    let formData = this.props.auth.getIn(["updatePassword", this.getEndpoint(), "form"]).toJS();
    this.props.dispatch(updatePassword(formData, this.getEndpoint()));
  }

  render () {
    let endpoint = this.getEndpoint();
    let loading = this.props.auth.getIn(["updatePassword", endpoint, "loading"]);
    let disabled = (
      !this.props.auth.getIn(["user", "isSignedIn"]) || loading ||
      (this.props.auth.getIn(["user", "attributes", "provider"]) !== "email")
    );

    return (
      <form
        className="redux-auth update-password-form clearfix"
        onSubmit={this.handleSubmit.bind(this)}>
        <Input
          type="password"
          floatingLabelText="Password"
          disabled={disabled}
          className="update-password-password"
          value={this.props.auth.getIn(["updatePassword", endpoint, "form", "password"])}
          errors={this.props.auth.getIn(["updatePassword", endpoint, "errors", "password"])}
          onChange={this.handleInput.bind(this, "password")}
          {...this.props.inputProps.password} />

        <Input
          type="password"
          floatingLabelText="Password Confirmation"
          className="update-password-password-confirmation"
          disabled={disabled}
          value={this.props.auth.getIn(["updatePassword", endpoint, "form", "password_confirmation"])}
          errors={this.props.auth.getIn(["updatePassword", endpoint, "errors", "password_confirmation"])}
          onChange={this.handleInput.bind(this, "password_confirmation")}
          {...this.props.inputProps.passwordConfirmation} />

        <ButtonLoader
          loading={loading}
          type="submit"
          className="update-password-submit"
          icon={ActionLock}
          primary={true}
          disabled={disabled}
          style={{float: "right"}}
          onClick={this.handleSubmit.bind(this)}
          {...this.props.inputProps.submit}>
          Update Password
        </ButtonLoader>
      </form>
    );
  }
}

export default connect(({auth}) => ({auth}))(UpdatePasswordForm);
