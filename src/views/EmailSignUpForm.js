import React, { PropTypes } from "react";
import Input from "./Input";
import ButtonLoader from "./ButtonLoader";
import { emailSignUpFormUpdate, emailSignUp } from "../actions/email-sign-up";
import { connect } from "react-redux";
import { Glyphicon } from "react-bootstrap";

@connect(({auth}) => ({auth}))
class EmailSignUpForm extends React.Component {
  static propTypes = {
    endpoint: PropTypes.string,
    inputProps: PropTypes.shape({
      email: PropTypes.object,
      password: PropTypes.object,
      submit: PropTypes.object
    })
  }

  static defaultProps = {
    inputProps: {
      email: {},
      password: {},
      submit: {}
    }
  }

  handleInput (key, val) {
    this.props.dispatch(emailSignUpFormUpdate(key, val));
  }

  handleSubmit () {
    let formData = this.props.auth.getIn(["emailSignUp", "form"]).toJS();
    this.props.dispatch(emailSignUp(formData, this.props.endpoint));
  }

  render () {
    let disabled = (
      this.props.auth.getIn(["user", "isSignedIn"]) ||
      this.props.auth.getIn(["emailSignUp", "loading"])
    );

    return (
      <form className='redux-auth email-sign-up-form clearfix'
            onSubmit={this.handleSubmit.bind(this)}>
        <Input type="text"
               label="Email"
               placeholder="Email"
               className="email-sign-up-email"
               disabled={disabled}
               value={this.props.auth.getIn(["emailSignUp", "form", "email"])}
               errors={this.props.auth.getIn(["emailSignUp", "errors", "email"])}
               onChange={this.handleInput.bind(this, "email")}
               {...this.props.inputProps.email} />

        <Input type="password"
               label="Password"
               placeholder="Password"
               className="email-sign-up-password"
               disabled={disabled}
               value={this.props.auth.getIn(["emailSignUp", "form", "password"])}
               errors={this.props.auth.getIn(["emailSignUp", "errors", "password"])}
               onChange={this.handleInput.bind(this, "password")}
               {...this.props.inputProps.password} />

        <Input type="password"
               label="Password Confirmation"
               placeholder="Password Confirmation"
               className="email-sign-up-password-confirmation"
               disabled={disabled}
               value={this.props.auth.getIn(["emailSignUp", "form", "password_confirmation"])}
               errors={this.props.auth.getIn(["emailSignUp", "errors", "password_confirmation"])}
               onChange={this.handleInput.bind(this, "password_confirmation")}
               {...this.props.inputProps.passwordConfirmation} />


        <ButtonLoader loading={this.props.auth.getIn(["emailSignUp", "loading"])}
                      type="submit"
                      className="email-sign-up-submit pull-right"
                      icon={<Glyphicon glyph="send" />}
                      disabled={disabled}
                      onClick={this.handleSubmit.bind(this)}
                      {...this.props.inputProps.submit}>
          Sign Up
        </ButtonLoader>
      </form>
    );
  }
}

export default EmailSignUpForm;
