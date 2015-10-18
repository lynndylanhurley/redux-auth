import React, { PropTypes } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { hideDestroyAccountSuccessModal } from "../../actions/ui";

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
      <Modal show={this.props.show}
             onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Destroy Account Success</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{this.props.auth.getIn(["ui", "destroyAccountMessage"])}</p>
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

export default DestroyAccountSuccessModal;
