import React, { PropTypes } from "react";
import { Button } from "react-bootstrap";
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
    let disabled = this.props.auth.getIn(["user", "isSignedIn"]);
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

        <Button onClick={this.handleSubmit.bind(this)}
                disabled={disabled}>
          Submit
        </Button>
      </div>
    );
  }
}

export default EmailSignInForm;
