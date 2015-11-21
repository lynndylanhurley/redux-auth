import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { hideEmailSignUpErrorModal } from "../../../actions/ui";
import { Dialog, FlatButton } from "material-ui";
import ErrorList from "../ErrorList";

@connect(({auth}) => ({auth}))
class EmailSignUpErrorModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideEmailSignUpErrorModal());
  }

  getEndpoint () {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  render () {
    return (
      <Dialog
        open={this.props.show}
        title="Sign Up Error"
        contentClassName="redux-auth-modal email-sign-up-form-error-modal"
        actions={[
          <FlatButton
            key="close"
            className="email-sign-up-form-error-modal-close"
            onClick={this.close.bind(this)}>
            Ok
          </FlatButton>
        ]}>
        <ErrorList errors={this.props.auth.getIn(["emailSignUp", this.getEndpoint(), "errors", "full_messages"])} />
      </Dialog>
    );
  }
}

export default EmailSignUpErrorModal;
