import React, { PropTypes } from "react";
import Input from "./Input";
import ButtonLoader from "./ButtonLoader";
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
    let loading = this.props.auth.getIn(["requestPasswordReset", "loading"]);
    let inputDisabled = this.props.auth.getIn(["user", "isSignedIn"]);
    let submitDisabled = !this.props.auth.getIn(["requestPasswordReset", "form", "email"]);

    return (
      <div className='redux-auth request-password-reset-form'>
        <h2>{this.props.title}</h2>
        <Input type="text"
               label="Email Address"
               placeholder="Email Address"
               disabled={loading || inputDisabled}
               value={this.props.auth.getIn(["requestPasswordReset", "form", "email"])}
               errors={this.props.auth.getIn(["requestPasswordReset", "errors", "email"])}
               onChange={this.handleInput.bind(this, "email")} />

        <ButtonLoader loading={loading}
                      glyph="lock"
                      disabled={inputDisabled || submitDisabled}
                      onClick={this.handleSubmit.bind(this)}>
          Request Password Reset
        </ButtonLoader>
      </div>
    );
  }
}

export default RequestPasswordResetForm;
