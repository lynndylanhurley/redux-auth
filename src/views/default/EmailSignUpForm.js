import React, { PropTypes } from "react";
import Input from "./Input";
import ButtonLoader from "./ButtonLoader";
import { emailSignUpFormUpdate, emailSignUp } from "../../actions/email-sign-up";
import { connect } from "react-redux";

const isEmpty = value => value === undefined || value === null || value === '';

class EmailSignUpForm extends React.Component {
  static propTypes = {
    endpoint: PropTypes.string,
    icon: PropTypes.string,
    email: PropTypes.string,
    origin: PropTypes.string,
    buttonText: PropTypes.string,
    inputProps: PropTypes.shape({
      email: PropTypes.object,
      first_name: PropTypes.object,
      last_name: PropTypes.object,
      password: PropTypes.object,
      passwordConfirmation: PropTypes.object,
      submit: PropTypes.object
    })
  };
  componentWillMount() {
    this.state = {
      email: '',
      emailError: null,
      passwordError: null,
      default: true
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.email && this.state.default){
      this.setState({ email: nextProps.email, default:false })
      this.props.dispatch(emailSignUpFormUpdate(this.getEndpoint(), 'email', nextProps.email));
    }
  }

  static defaultProps = {
    inputProps: {
      email: {},
      password: {},
      submit: {},
      first_name: {},
      last_name: {}
    }
  };

  getEndpoint () {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  validatePassword(value){
    if(this.props.origin) return null
    if (isEmpty(value)) {
      return "Must enter password"
    }else if (value.length < 6){
      return "Must be at least 6 characters"
    }else{
      return null
    }
  }

  validateEmail(value){
    if (isEmpty(value)) {
      return "Email Required"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
      return "Must be a valid email address"
    }else{
      return null
    }
  }

  handleInput (key, val) {
    if(key === 'email') {
      this.setState({email: val})
      this.setState({emailError: this.validateEmail(val)})
    }
    if(key==='password'){
      this.setState({passwordError: this.validatePassword(val)})
    }
    this.props.dispatch(emailSignUpFormUpdate(this.getEndpoint(), key, val));
  }

  handleSubmit (event) {
    event.preventDefault();
    let formData = this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form"]).toJS();
    if (this.props.origin){
      formData.origin = this.props.origin
    }
    this.setState({emailError: this.validateEmail(formData.email), passwordError: this.validatePassword(formData.password)}, function(previousState, currentProps){
      if(!this.state.emailError && !this.state.passwordError){
        this.props.dispatch(emailSignUp(formData, this.getEndpoint()));
      }
    });
  }

  render () {
    let disabled = (
      this.props.auth.getIn(["user", "isSignedIn"]) ||
      this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "loading"])
    );
    return (
      <form className='lark-form form-shadow invitation-accept-form'
            onSubmit={this.handleSubmit.bind(this)}>
        <div className='row'>
          <div className='col-xs-6 control-group '>
            <div>
              <Input type="text"
                     label="FirstName"
                     className="form-control"
                     disabled={disabled}
                     value={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "first_name"])}
                     errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "first_name"])}
                     onChange={this.handleInput.bind(this, "first_name")}
                     {...this.props.inputProps.firstName} />
            </div>
          </div>
        <div className='col-xs-6 control-group '>
          <div>
            <Input type="text"
                   label="LastName"
                   className="form-control"
                   disabled={disabled}
                   value={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "last_name"])}
                   errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "last_name"])}
                   onChange={this.handleInput.bind(this, "last_name")}
                   {...this.props.inputProps.last_name} />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-12 control-group '>
          <div>
            <Input type="text"
                   label="Email"
                   className="form-control"
                   disabled={disabled}
                   value={this.state.email}
                   errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "email"])}
                   onChange={this.handleInput.bind(this, "email")}
                   {...this.props.inputProps.email} />
          </div>
          <div className="error-container">
            <small className="error">{this.state.emailError}</small>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-xs-12 control-group '>
          <div>
            <Input type="password"
                   label="Password"
                   className="form-control"
                   disabled={disabled}
                   value={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "form", "password"])}
                   errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "password"])}
                   onChange={this.handleInput.bind(this, "password")}
                   {...this.props.inputProps.password} />
          </div>
          <div className="error-container">
            <small className="error">{this.state.passwordError}</small>
          </div>
        </div>
      </div>
        <button
          disabled={disabled || this.state.emailError || this.state.passwordError}
          className='btn btn-skylark btn-fill btn-sharp'
          onClick={this.handleSubmit.bind(this)}>
          <span class="button-content">
            <span class="button-text">{ this.props.buttonText || 'Accept Invitation' }</span>
          </span>
        </button>
      </form>
    );
  }
}

export default connect(({auth}) => ({auth}))(EmailSignUpForm);
