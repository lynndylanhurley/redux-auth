import React, { PropTypes } from "react";
import { Dialog, FlatButton } from "material-ui";
import { connect } from "react-redux";
import { hideDestroyAccountSuccessModal } from "../../../actions/ui";

@connect(({auth}) => ({auth}))
class DestroyAccountSuccessModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool
  }

  static defaultProps = {
    show: false
  }

  close () {
    this.props.dispatch(hideDestroyAccountSuccessModal());
  }

  render () {
    return (
      <Dialog
        open={this.props.show}
        title="Destroy Account Success"
        contentClassName="redux-auth-modal destroy-account-success-modal"
        actions={[
          <FlatButton
            key="close"
            className="destroy-account-success-modal-close"
            onClick={this.close.bind(this)}>
            Ok
          </FlatButton>
        ]}>
        <p>{this.props.auth.getIn(["ui", "destroyAccountMessage"])}</p>
      </Dialog>
    );
  }
}

export default DestroyAccountSuccessModal;
