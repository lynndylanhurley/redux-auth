import React from "react";
import { connect } from "react-redux";

@connect(({auth}) => {
  let headers = auth.getIn(["server", "nextHeaders"]);

  return {
    initialCredentials: headers && JSON.stringify({
      user: auth.getIn(["user", "attributes"]),
      headers
    })
  };
})
class TokenBridge extends React.Component {
  render () {
    return (
      <script id="token-bridge"
              type="application/json"
              dangerouslySetInnerHTML={{__html: this.props.initialCredentials}} />
    );
  }
}

export default TokenBridge;
