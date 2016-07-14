import React, { PropTypes } from "react";
import Input from "./Input";
import ButtonLoader from "./ButtonLoader";
import { Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";
import {
  requestPasswordResetFormUpdate,
  requestPasswordReset
} from "../../actions/request-password-reset";

class RequestPasswordResetForm extends React.Component {
  static propTypes = {
    endpoint: PropTypes.string,
    inputProps: PropTypes.shape({
      email: PropTypes.object,
      submit: PropTypes.object
    })
  };

  static defaultProps = {
    inputProps: {
      email: {},
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
    this.props.dispatch(requestPasswordResetFormUpdate(this.getEndpoint(), key, val));
  }

  handleSubmit (event) {
    event.preventDefault();
    let formData = this.props.auth.getIn(["requestPasswordReset", this.getEndpoint(), "form"]).toJS();
    this.props.dispatch(requestPasswordReset(formData, this.getEndpoint()));
  }

  render () {
    let loading = this.props.auth.getIn(["requestPasswordReset", this.getEndpoint(), "loading"]);
    let inputDisabled = this.props.auth.getIn(["user", "isSignedIn"]);
    let submitDisabled = !this.props.auth.getIn(["requestPasswordReset", this.getEndpoint(), "form", "email"]);

    return (
      <form
        className='redux-auth request-password-reset-form clearfix'
        onSubmit={this.handleSubmit.bind(this)}>

        <Input
          type="text"
          label="Email Address"
          groupClassName="request-password-reset-email"
          placeholder="Email Address"
          disabled={loading || inputDisabled}
          value={this.props.auth.getIn(["requestPasswordReset", this.getEndpoint(), "form", "email"])}
          errors={this.props.auth.getIn(["requestPasswordReset", this.getEndpoint(), "errors", "email"])}
          onChange={this.handleInput.bind(this, "email")}
          {...this.props.inputProps.email} />

        <ButtonLoader
          loading={loading}
          type="submit"
          icon={<Glyphicon glyph="send" />}
          className="pull-right request-password-reset-submit"
          disabled={inputDisabled || submitDisabled}
          onClick={this.handleSubmit.bind(this)}
          {...this.props.inputProps.submit}>
          Request Password Reset
        </ButtonLoader>
      </form>
    );
  }
}

export default connect(({auth}) => ({auth}))(RequestPasswordResetForm);
