import React from "react";
import { connect } from "react-redux";

class TokenBridge extends React.Component {
  render () {
    return (
      <script id="token-bridge"
              type="application/json"
              dangerouslySetInnerHTML={{__html: this.props.initialCredentials}} />
    );
  }
}

export default connect(({auth}) => {
  let headers = auth.getIn(["server", "headers"]);

  return {
    initialCredentials: headers && JSON.stringify({
      user: auth.getIn(["server", "user"]),
      mustResetPassword: auth.getIn(["server", "mustResetPassword"]),
      firstTimeLogin: auth.getIn(["server", "firstTimeLogin"]),
      currentEndpointKey: auth.getIn(["configure", "currentEndpointKey"]),
      defaultEndpointKey: auth.getIn(["configure", "defaultEndpointKey"]),
      headers
    })
  };
})(TokenBridge);
