import React, { PropTypes } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { hideDestroyAccountErrorModal } from "../../actions/ui";
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

  render () {
    return (
      <Modal show={this.props.show}
             onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ErrorList errors={this.props.auth.getIn(["destroyAccount", "errors"])} />
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.close.bind(this)}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default DestroyAccountErrorModal;
