import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Dialog, FlatButton } from "material-ui";
import { hideOAuthSignInSuccessModal } from "../../../actions/ui";

@connect(({auth}) => ({auth}))
class OAuthSignInSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideOAuthSignInSuccessModal());
  }

  render () {
    return (
      <Dialog
        open={this.props.show}
        contentClassName="redux-auth-modal oauth-sign-in-success-modal"
        title="Welcome"
        actions={[
          <FlatButton
            key="close"
            onClick={this.close.bind(this)}
            className="oauth-sign-in-success-modal-close">
            Close
          </FlatButton>
        ]}>
        <p>You are now signed in via {this.props.auth.getIn(["user", "attributes", "provider"])}.</p>
      </Dialog>
    );
  }
}

export default OAuthSignInSuccessModal;
