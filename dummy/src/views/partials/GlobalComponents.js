import React from "react";
import { AuthModals, TokenBridge } from "../../../../src/index";
import RequestTestSuccessModal from "./RequestTestSuccessModal";
import RequestTestErrorModal from "./RequestTestErrorModal";

class GlobalComponents extends React.Component {
  render () {
    return (
      <div>
        <AuthModals />
        <RequestTestSuccessModal />
        <RequestTestErrorModal />
        <TokenBridge />
      </div>
    );
  }
}

export default GlobalComponents;
