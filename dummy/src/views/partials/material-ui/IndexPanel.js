import React, { PropTypes } from "react";
import { Card, CardHeader, CardText, GridTile } from "material-ui";

class IndexPanel extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
  }

  static defaultProps = {
    children: <span />
  }

  render () {
    return (
      <GridTile cols={1} style={{padding: "4px"}}>
        <Card>
          <CardHeader title={this.props.title} />
          <CardText>{this.props.children}</CardText>
        </Card>

      </GridTile>
    );
  }
}

export default IndexPanel;
