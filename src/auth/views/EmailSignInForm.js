import React, { PropTypes } from "react";
import ButtonLoader from "./ButtonLoader";
import Input from "./Input";
import { emailSignInFormUpdate, emailSignIn } from "../actions/email-sign-in";
import { connect } from "react-redux";

@connect(({auth}) => ({auth}))
class EmailSignInForm extends React.Component {
  static defaultProps = {
    title: "Sign In"
  }

  static propTypes = {
    title: PropTypes.string
  }

  handleInput (key, val) {
    this.props.dispatch(emailSignInFormUpdate(key, val));
  }

  handleSubmit () {
    let formData = this.props.auth.getIn(["emailSignIn", "form"]).toJS();
    this.props.dispatch(emailSignIn(formData));
  }

  render () {
    let disabled = (
      this.props.auth.getIn(["user", "isSignedIn"]) ||
      this.props.auth.getIn(["emailSignIn", "loading"])
    );

    return (
      <div className='redux-auth email-sign-in-form'>
        <h2>{this.props.title}</h2>
        <Input type="text"
               label="Email"
               placeholder="Email"
               disabled={disabled}
               value={this.props.auth.getIn(["emailSignIn", "form", "email"])}
               errors={this.props.auth.getIn(["emailSignIn", "errors", "email"])}
               onChange={this.handleInput.bind(this, "email")} />

        <Input type="password"
               label="Password"
               placeholder="Password"
               disabled={disabled}
               value={this.props.auth.getIn(["emailSignIn", "form", "password"])}
               errors={this.props.auth.getIn(["emailSignIn", "errors", "password"])}
               onChange={this.handleInput.bind(this, "password")} />

        <ButtonLoader loading={this.props.auth.getIn(["emailSignIn", "loading"])}
                      glyph="log-in"
                      disabled={disabled}
                      onClick={this.handleSubmit.bind(this)}>
          Sign In
        </ButtonLoader>
      </div>
    );
  }
}

export default EmailSignInForm;
