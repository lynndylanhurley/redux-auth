import React, { PropTypes } from "react";
import { Card, CardText } from "material-ui";

class ExampleWell extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render () {
    return (
      <div>
        <label>Example</label>
        <Card>
          <CardText>{this.props.children}</CardText>
        </Card>
      </div>
    );
  }
}

export default ExampleWell;
