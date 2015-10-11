import React, { PropTypes } from "react";
import Input from "./Input";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
  requestPasswordResetFormUpdate,
  requestPasswordReset
} from "../actions/request-password-reset";

@connect(({auth}) => ({auth}))
class RequestPasswordResetForm extends React.Component {
  static propTypes = {
    title: PropTypes.string
  }

  static defaultProps = {
    title: "Request Password Reset"
  }

  handleInput (key, val) {
    this.props.dispatch(requestPasswordResetFormUpdate(key, val));
  }

  handleSubmit () {
    let formData = this.props.auth.getIn(["requestPasswordReset", "form"]).toJS();
    console.log("submitting password reset", formData);
    this.props.dispatch(requestPasswordReset(formData));
  }

  render () {
    let disabled = this.props.auth.getIn(["user", "isSignedIn"]);
    return (
      <div className='redux-auth request-password-reset-form'>
        <h2>{this.props.title}</h2>
        <Input type="text"
               label="Email Address"
               placeholder="Email Address"
               disabled={disabled}
               value={this.props.auth.getIn(["requestPasswordReset", "form", "email"])}
               errors={this.props.auth.getIn(["requestPasswordReset", "errors", "email"])}
               onChange={this.handleInput.bind(this, "email")} />

        <Button onClick={this.handleSubmit.bind(this)}
                disabled={disabled}>
          Submit
        </Button>
      </div>
    );
  }
}

export default RequestPasswordResetForm;
