import React, { PropTypes } from "react";
import { Dialog, FlatButton } from "material-ui";
import { connect } from "react-redux";
import { hideDestroyAccountErrorModal } from "../../../actions/ui";
import ErrorList from "../ErrorList";

@connect(({auth}) => ({auth}))
class DestroyAccountErrorModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideDestroyAccountErrorModal());
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
        contentClassName="redux-auth-modal destroy-account-error-modal"
        open={this.props.show}
        actions={[
          <FlatButton
            key="close"
            className="destroy-account-error-modal-close"
            onClick={this.close.bind(this)}>
            Ok
          </FlatButton>
        ]}
        title="Error">
        <ErrorList errors={this.props.auth.getIn(["destroyAccount", this.getEndpoint(), "errors"])} />
      </Dialog>
    );
  }
}

export default DestroyAccountErrorModal;
