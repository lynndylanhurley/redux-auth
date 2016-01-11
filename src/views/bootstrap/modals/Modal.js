import React, { PropTypes } from "react";
import { Modal, Button } from "react-bootstrap";
import ErrorList from "../ErrorList";
import { connect } from "react-redux";

class BaseModal extends React.Component {
  static propTypes = {
    show: PropTypes.bool,
    errorAddr: PropTypes.array,
    closeBtnLabel: PropTypes.string
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

    return (
      <Modal
        show={this.props.show}
        className={`redux-auth-modal ${this.props.containerClass}`}
        onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{body}</Modal.Body>

        <Modal.Footer>
          <Button
            onClick={this.close.bind(this)}
            className={`${this.props.containerClass}-close`}>
            {this.props.closeBtnLabel}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(({auth}) => ({auth}))(BaseModal);
