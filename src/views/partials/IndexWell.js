import React, { PropTypes } from "react";
import { Well, Col } from "react-bootstrap";

class IndexWell extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  static defaultProps = {
    children: <span />
  }

  render () {
    return (
      <Col sm={6}>
        <Well>
          {this.props.children}
        </Well>
      </Col>
    );
  }
}

export default IndexWell;
