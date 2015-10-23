import React from "react";
import { AuthModals, TokenBridge } from "../../../../src";
import RequestTestSuccessModal from "./RequestTestSuccessModal";
import RequestTestErrorModal from "./RequestTestErrorModal";

class GlobalComponents extends React.Component {
  render () {
    return (
      <div>
        {console.log("bang 10")}
        <AuthGlobals />
        <RequestTestSuccessModal />
        <RequestTestErrorModal />
        {console.log("bang 11")}
      </div>
    );
  }
}

export default GlobalComponents;
