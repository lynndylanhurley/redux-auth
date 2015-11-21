import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { Dialog, FlatButton } from "material-ui";
import { hidePasswordResetRequestErrorModal } from "../../../actions/ui";
import ErrorList from "../ErrorList";

@connect(({auth}) => ({auth}))
class RequestPasswordResetErrorModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hidePasswordResetRequestErrorModal());
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
        contentClassName="redux-auth-modal request-password-reset-error-modal"
        title="Error"
        actions={[
          <FlatButton
            key="close"
            onClick={this.close.bind(this)}
            className="request-password-reset-error-modal-close">
            Ok
          </FlatButton>
        ]}>
        <ErrorList errors={this.props.auth.getIn(["requestPasswordReset", this.getEndpoint(), "errors"])} />
      </Dialog>
    );
  }
}

export default RequestPasswordResetErrorModal;
