import React, { PropTypes } from "react";
import { Dialog, FlatButton } from "material-ui";
import { connect } from "react-redux";
import { hideEmailSignInErrorModal } from "../../../actions/ui";
import ErrorList from "../ErrorList";

@connect(({auth}) => ({auth}))
class EmailSignInErrorModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideEmailSignInErrorModal());
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
        contentClassName="redux-auth-modal email-sign-in-error-modal"
        title="Sign In Error"
        actions={[
          <FlatButton
            onClick={this.close.bind(this)}
            key="close"
            className="email-sign-in-error-modal-close">
            Ok
          </FlatButton>
        ]}>
        <ErrorList errors={this.props.auth.getIn(["emailSignIn", this.getEndpoint(), "errors"])} />
      </Dialog>
    );
  }
}

export default EmailSignInErrorModal;
