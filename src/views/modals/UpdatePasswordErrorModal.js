import React, { PropTypes } from "react";
import { Modal, Button } from "react-bootstrap";
import { hideUpdatePasswordErrorModal } from "../../actions/ui";
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

  render () {
    return (
      <Modal show={this.props.show}
             onHide={this.close.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ErrorList errors={this.props.auth.getIn(["updatePassword", "errors", "full_messages"])} />
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

export default UpdatePasswordErrorModal;
