import React from "react";
import { connect } from "react-redux";

@connect(({auth}) => {
  let headers = auth.getIn(["server", "nextHeaders"]);

  return {
    initialCredentials: headers && JSON.stringify({
      user: auth.getIn(["user", "attributes"]),
      mustResetPassword: auth.getIn(["server", "mustResetPassword"]),
      firstTimeLogin: auth.getIn(["server", "firstTimeLogin"]),
      headers
    })
  };
})
class TokenBridge extends React.Component {
  render () {
    console.log("bridging data", this.props.initialCredentials);
    return (
      <script id="token-bridge"
              type="application/json"
              dangerouslySetInnerHTML={{__html: this.props.initialCredentials}} />
    );
  }
}

export default TokenBridge;
