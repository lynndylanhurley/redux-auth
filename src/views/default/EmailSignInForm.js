import React, { PropTypes } from "react";
import ButtonLoader from "./ButtonLoader";
import Input from "./Input";
import { emailSignInFormUpdate, emailSignIn } from "../../actions/email-sign-in";
import { connect } from "react-redux";

class EmailSignInForm extends React.Component {
  static propTypes = {
    endpoint: PropTypes.string,
    next: PropTypes.func,
    inputProps: PropTypes.shape({
      email: PropTypes.object,
      password: PropTypes.object,
      submit: PropTypes.object
    })
  };

  static defaultProps = {
    next: () => {},
    inputProps: {
      email: {},
      password: {},
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
    this.props.dispatch(emailSignInFormUpdate(this.getEndpoint(), key, val));
  }

  handleSubmit (event) {
    event.preventDefault();
    let formData = this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form"]).toJS();
    this.props.dispatch(emailSignIn(formData, this.getEndpoint()))
      .then(this.props.next)
      .catch(() => {});
  }

  render () {
    let disabled = (
      this.props.auth.getIn(["user", "isSignedIn"]) ||
      this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "loading"])
    );

    return (
      <form className='redux-auth email-sign-in-form'
            style={{clear: "both", overflow: "hidden"}}
            onSubmit={this.handleSubmit.bind(this)}>
        <Input type="text"
               className="email-sign-in-email"
               label="Email"
               disabled={disabled}
               value={this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form", "email"])}
               errors={this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "errors", "email"])}
               onChange={this.handleInput.bind(this, "email")}
               {...this.props.inputProps.email} />

        <Input type="password"
               label="Password"
               className="email-sign-in-password"
               disabled={disabled}
               value={this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form", "password"])}
               errors={this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "errors", "password"])}
               onChange={this.handleInput.bind(this, "password")}
               {...this.props.inputProps.password} />

        <ButtonLoader loading={this.props.auth.getIn(["emailSignIn", "loading"])}
                      type="submit"
                      style={{float: "right"}}
                      icon={this.props.icon}
                      className='email-sign-in-submit'
                      disabled={disabled}
                      onClick={this.handleSubmit.bind(this)}
                      primary={true}
                      {...this.props.inputProps.submit}>
          Sign In
        </ButtonLoader>
      </form>
    );
  }
}

export default connect(({auth}) => ({auth}))(EmailSignInForm);
