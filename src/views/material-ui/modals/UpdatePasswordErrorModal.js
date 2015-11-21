import React, { PropTypes } from "react";
import { Dialog, FlatButton } from "material-ui";
import { hideUpdatePasswordErrorModal } from "../../../actions/ui";
import { connect } from "react-redux";
import ErrorList from "../ErrorList";

@connect(({auth}) => ({auth}))
class UpdatePasswordErrorModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideUpdatePasswordErrorModal());
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
        contentClassName="redux-auth-modal update-password-error-modal"
        title="Error"
        actions={[
          <FlatButton
            key="close"
            onClick={this.close.bind(this)}
            className="update-password-error-modal-close">
            Ok
          </FlatButton>
        ]}>
        <ErrorList errors={this.props.auth.getIn(["updatePassword", this.getEndpoint(), "errors", "full_messages"])} />
      </Dialog>
    );
  }
}

export default UpdatePasswordErrorModal;
