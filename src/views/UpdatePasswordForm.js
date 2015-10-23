import React, { PropTypes } from "react";
import Input from "./Input";
import ButtonLoader from "./ButtonLoader";
import { Glyphicon } from "react-bootstrap";
import { updatePassword, updatePasswordFormUpdate } from "../../actions/update-password";
import { connect } from "react-redux";

@connect(({auth}) => ({auth}))
class UpdatePasswordForm extends React.Component {
  static propTypes = {
    icon: PropTypes.node
  }

  static defaultProps = {
    icon: <Glyphicon glyph="lock" />
  }

  handleInput (key, val) {
    this.props.dispatch(updatePasswordFormUpdate(key, val));
  }

  handleSubmit () {
    let formData = this.props.auth.getIn(["updatePassword", "form"]).toJS();
    this.props.dispatch(updatePassword(formData));
  }

  render () {
    let loading = this.props.auth.getIn(["updatePassword", "loading"]);
    let disabled = (
      !this.props.auth.getIn(["user", "isSignedIn"]) || loading ||
      (this.props.auth.getIn(["user", "attributes", "provider"]) !== "email")
    );

    return (
      <form className="redux-auth update-password-form clearfix"
            onSubmit={this.handleSubmit.bind(this)}>
        <Input type="password"
               label="Password"
               placeholder="Password"
               disabled={disabled}
               value={this.props.auth.getIn(["updatePassword", "form", "password"])}
               errors={this.props.auth.getIn(["updatePassword", "errors", "password"])}
               onChange={this.handleInput.bind(this, "password")} />

        <Input type="password"
               label="Password Confirmation"
               placeholder="Password Confirmation"
               disabled={disabled}
               value={this.props.auth.getIn(["updatePassword", "form", "password_confirmation"])}
               errors={this.props.auth.getIn(["updatePassword", "errors", "password_confirmation"])}
               onChange={this.handleInput.bind(this, "password_confirmation")} />

        <ButtonLoader loading={loading}
                      type="submit"
                      className="pull-right"
                      icon={this.props.icon}
                      disabled={disabled}
                      onClick={this.handleSubmit.bind(this)}>
          Update Password
        </ButtonLoader>
      </form>
    );
  }
}

export default UpdatePasswordForm;
