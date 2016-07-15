import React, { PropTypes } from "react";
import Dialog from "rc-dialog";
import ErrorList from "../ErrorList";
import { connect } from "react-redux";

class BaseModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool,
    errorAddr: PropTypes.array,
    closeBtnLabel: PropTypes.string,
    closeAction: PropTypes.func
  };

  static defaultProps = {
    show: false,
    errorAddr: null,
    closeBtnLabel: "Ok"
  };

  close () {
    this.props.dispatch(this.props.closeAction());
  }

  getEndpoint () {
    return (
      this.props.endpoint ||
      this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
      this.props.auth.getIn(["configure", "defaultEndpointKey"])
    );
  }

  getErrorList () {
    let [base, ...rest] = this.props.errorAddr;
    return <ErrorList errors={this.props.auth.getIn([
      base, this.getEndpoint(), ...rest
    ])} />
  }

  render () {
    let body = (this.props.errorAddr)
      ? this.getErrorList()
      : this.props.children;

    return (this.props.show)
      ? (
        <Dialog
          visible={this.props.show}
          className={`redux-auth-modal ${this.props.containerClass}`}
          title={this.props.title}
          onClose={this.close.bind(this)}>

          <div>
            <div className="redux-auth-modal-body">
              {body}
            </div>

            <div className="redux-auth-modal-footer">
              <button
                onClick={this.close.bind(this)}
                className={`${this.props.containerClass}-close`}>
                {this.props.closeBtnLabel}
              </button>
            </div>
          </div>
        </Dialog>
      )
      : <span />;
  }
}

export default connect(({auth}) => ({auth}))(BaseModal);
