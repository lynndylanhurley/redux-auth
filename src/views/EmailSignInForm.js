import React, { PropTypes } from "react";
import ButtonLoader from "./ButtonLoader";
import Input from "./Input";
import { emailSignInFormUpdate, emailSignIn } from "../../actions/email-sign-in";
import { Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";

@connect(({auth}) => ({auth}))
class EmailSignInForm extends React.Component {
  static propTypes = {
    icon: PropTypes.node
  }

  static defaultProps = {
    icon: <Glyphicon glyph="log-in" />
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
      <form className='redux-auth email-sign-in-form clearfix'
            onSubmit={this.handleSubmit.bind(this)}>
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
                      type="submit"
                      className='pull-right'
                      icon={this.props.icon}
                      disabled={disabled}
                      onClick={this.handleSubmit.bind(this)}>
          Sign In
        </ButtonLoader>
      </form>
    );
  }
}

export default EmailSignInForm;
