import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Colors from "material-ui/lib/styles/colors";
import { Dialog, FlatButton } from "material-ui";
import { hideOAuthSignInErrorModal } from "../../../actions/ui";
import {AlertError} from "material-ui/lib/svg-icons";


@connect(({auth}) => ({auth}))
class OAuthSignInErrorModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideOAuthSignInErrorModal());
  }

  render () {
    return (
      <Dialog
        open={this.props.show}
        contentClassName="redux-auth-modal oauth-sign-in-error-modal"
        onHide={this.close.bind(this)}
        actions={[
          <FlatButton
            key="close"
            onClick={this.close.bind(this)}
            className="oauth-sign-in-error-modal-close">
            Ok
          </FlatButton>
        ]}
        title="OAuth Sign In Error">
        <p
          className="inline-error-item"
          style={{paddingLeft: "20px", position: "relative", marginBottom: "28px"}}>
          <AlertError
            viewBox="0 0 50 50"
            color={Colors.red500}
            style={{
              position: "absolute",
              left: 0,
              top: 3}} />
          There was an error authenticating your account. Please try again.
        </p>
      </Dialog>
    );
  }
}

export default OAuthSignInErrorModal;
