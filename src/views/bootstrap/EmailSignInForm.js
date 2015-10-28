import React, { PropTypes } from "react";
import ButtonLoader from "./ButtonLoader";
import Input from "./Input";
import { emailSignInFormUpdate, emailSignIn } from "../../actions/email-sign-in";
import { Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";

@connect(({auth}) => ({auth}))
class EmailSignInForm extends React.Component {
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
    this.props.dispatch(emailSignInFormUpdate(key, val));
  }

  handleSubmit () {
    let formData = this.props.auth.getIn(["emailSignIn", "form"]).toJS();
    this.props.dispatch(emailSignIn(formData, this.props.endpoint));
  }

  render () {
    let disabled = (
      this.props.auth.getIn(["user", "isSignedIn"]) ||
      this.props.auth.getIn(["emailSignIn", "loading"])
    );

    return (
      <form className='redux-auth email-sign-in-form clearfix'
            onSubmit={this.handleSubmit.bind(this)}>
        <Input type="text"
               label="Email"
               placeholder="Email"
               disabled={disabled}
               value={this.props.auth.getIn(["emailSignIn", "form", "email"])}
               errors={this.props.auth.getIn(["emailSignIn", "errors", "email"])}
               onChange={this.handleInput.bind(this, "email")}
               {...this.props.inputProps.email} />

        <Input type="password"
               label="Password"
               placeholder="Password"
               disabled={disabled}
               value={this.props.auth.getIn(["emailSignIn", "form", "password"])}
               errors={this.props.auth.getIn(["emailSignIn", "errors", "password"])}
               onChange={this.handleInput.bind(this, "password")}
               {...this.props.inputProps.password} />

        <ButtonLoader loading={this.props.auth.getIn(["emailSignIn", "loading"])}
                      type="submit"
                      icon={<Glyphicon glyph="log-in" />}
                      className='pull-right'
                      disabled={disabled}
                      onClick={this.handleSubmit.bind(this)}
                      {...this.props.inputProps.submit}>
          Sign In
        </ButtonLoader>
      </form>
    );
  }
}

export default EmailSignInForm;
