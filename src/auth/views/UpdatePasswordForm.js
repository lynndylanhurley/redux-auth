import React, { PropTypes } from "react";
import Input from "./Input";
import { Button } from "react-bootstrap";
import { updatePassword, updatePasswordFormUpdate } from "../actions/update-password";
import { connect } from "react-redux";

@connect(({auth}) => ({auth}))
class UpdatePasswordForm extends React.Component {
  static propTypes = {
    title: PropTypes.string
  }

  static defaultProps = {
    title: "Update Password"
  }

  handleInput (key, val) {
    this.props.dispatch(updatePasswordFormUpdate(key, val));
  }

  handleSubmit () {
    let formData = this.props.auth.getIn(["updatePassword", "form"]).toJS();
    console.log("form data", formData);
    this.props.dispatch(updatePassword(formData));
  }

  render () {
    let disabled = (
      !this.props.auth.getIn(["user", "isSignedIn"]) ||
      (this.props.auth.getIn(["user", "attributes", "provider"]) !== "email")
    );

    return (
      <div className="redux-auth update-password-form">
        <h2>{this.props.title}</h2>
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

        <Button onClick={this.handleSubmit.bind(this)}
                disabled={disabled}>
          Submit
        </Button>

      </div>
    );
  }
}

export default UpdatePasswordForm;
