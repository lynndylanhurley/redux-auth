import React, { PropTypes } from "react";
import ButtonLoader from "./ButtonLoader";
import Input from "./Input";
import { emailSignInFormUpdate, emailSignIn } from "../../actions/email-sign-in";
import { connect } from "react-redux";

class EmailSignInForm extends React.Component {
  static propTypes = {
    endpoint: PropTypes.string,
    inputProps: PropTypes.shape({
      email: PropTypes.object,
      password: PropTypes.object,
      submit: PropTypes.object
    })
  };

  static defaultProps = {
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
    const defaultState = this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "form"])
    const nullState    = this.props.auth.getIn(["emailSignIn", 'null', "form"])
    let formData       = (defaultState || nullState).toJS();
    this.props.dispatch(emailSignIn(formData, this.getEndpoint()));
  }

  render () {
    let disabled = (
      this.props.auth.getIn(["user", "isSignedIn"]) ||
      this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "loading"])
    );
    let loading = this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "loading"]);

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

        <button
          disabled={disabled}
          className='email-sign-in-submit btn btn-login'
          onClick={this.handleSubmit.bind(this)}>
          <span class="button-content">
            { loading ? <div class="button-spinner small simple"/> : null }
            <span class="button-text">Login</span>
          </span>
        </button>


      </form>
    );
  }
}

export default connect(({auth}) => ({auth}))(EmailSignInForm);
