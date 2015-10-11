import React, { PropTypes } from "react";
import EmailSignInSuccessModal from "./modals/EmailSignInSuccessModal";
import EmailSignInErrorModal from "./modals/EmailSignInErrorModal";
import OAuthSignInSuccessModal from "./modals/OAuthSignInSuccessModal";
import OAuthSignInErrorModal from "./modals/OAuthSignInErrorModal";
import EmailSignUpSuccessModal from "./modals/EmailSignUpSuccessModal";
import EmailSignUpErrorModal from "./modals/EmailSignUpErrorModal";
import SignOutSuccessModal from "./modals/SignOutSuccessModal";
import SignOutErrorModal from "./modals/SignOutErrorModal";
import FirstTimeLoginSuccessModal from "./modals/FirstTimeLoginSuccessModal";
import FirstTimeLoginErrorModal from "./modals/FirstTimeLoginErrorModal";
import RequestPasswordResetErrorModal from "./modals/RequestPasswordResetErrorModal";
import RequestPasswordResetSuccessModal from "./modals/RequestPasswordResetSuccessModal";
import { connect } from "react-redux";

@connect(({authUi}) => ({authUi}))
class AuthModals extends React.Component {
  static propTypes = {
    signOutSuccessEnabled: PropTypes.bool,
    signOutErrorEnabled: PropTypes.bool,
    emailSignInSuccessEnabled: PropTypes.bool,
    emailSignInErrorEnabled: PropTypes.bool,
    oAuthSignInSuccessEnabled: PropTypes.bool,
    oAuthSignInErrorEnabled: PropTypes.bool,
    emailSignUpSuccessEnabled: PropTypes.bool,
    emailSignUpErrorEnabled: PropTypes.bool,
    firstTimeLoginSuccessEnabled: PropTypes.bool,
    firstTimeLoginErrorEnabled: PropTypes.bool,
    requestPasswordResetErrorEnabled: PropTypes.bool,
    requestPasswordResetSuccessEnabled: PropTypes.bool
  }

  static defaultProps = {
    signOutSuccessEnabled: true,
    signOutErrorEnabled: true,
    emailSignInSuccessEnabled: true,
    emailSignInErrorEnabled: true,
    oAuthSignInSuccessEnabled: true,
    oAuthSignInErrorEnabled: true,
    emailSignUpSuccessEnabled: true,
    emailSignUpErrorEnabled: true,
    firstTimeLoginSuccessEnabled: true,
    firstTimeLoginErrorEnabled: true,
    requestPasswordResetErrorEnabled: true,
    requestPasswordResetSuccessEnabled: true
  }

  render () {
    let showEmailSignInSuccess = (
      this.props.emailSignInSuccessEnabled &&
      this.props.authUi.get("emailSignInSuccessModalVisible")
    );

    let showEmailSignInError = (
      this.props.emailSignInErrorEnabled &&
      this.props.authUi.get("emailSignInErrorModalVisible")
    );

    let showEmailSignUpSuccess = (
      this.props.emailSignUpSuccessEnabled &&
      this.props.authUi.get("emailSignUpSuccessModalVisible")
    );

    let showEmailSignUpError = (
      this.props.emailSignUpErrorEnabled &&
      this.props.authUi.get("emailSignUpErrorModalVisible")
    );

    let showSignOutSuccess = (
      this.props.signOutSuccessEnabled &&
      this.props.authUi.get("signOutSuccessModalVisible")
    );

    let showSignOutError = (
      this.props.signOutErrorEnabled &&
      this.props.authUi.get("signOutErrorModalVisible")
    );

    let showFirstTimeLoginSuccess = (
      this.props.firstTimeLoginSuccessEnabled &&
      this.props.authUi.get("firstTimeLoginSuccessModalVisible")
    );

    let showFirstTimeLoginError = (
      this.props.firstTimeLoginErrorEnabled &&
      this.props.authUi.get("firstTimeLoginErrorModalVisible")
    );

    let showRequestPasswordResetError = (
      this.props.requestPasswordResetErrorEnabled &&
      this.props.authUi.get("requestPasswordResetErrorModalVisible")
    );

    let showRequestPasswordResetSuccess = (
      this.props.requestPasswordResetSuccessEnabled &&
      this.props.authUi.get("requestPasswordResetSuccessModalVisible")
    );

    let showOAuthSignInSuccess = (
      this.props.oAuthSignInSuccessEnabled &&
      this.props.authUi.get("oAuthSignInSuccessModalVisible")
    );

    let showOAuthSignInError = (
      this.props.oAuthSignInErrorEnabled &&
      this.props.authUi.get("oAuthSignInErrorModalVisible")
    );

    return (
      <div id="auth-modals">
        <EmailSignInSuccessModal show={showEmailSignInSuccess} />
        <EmailSignInErrorModal show={showEmailSignInError} />
        <OAuthSignInSuccessModal show={showOAuthSignInSuccess} />
        <OAuthSignInErrorModal show={showOAuthSignInError} />
        <EmailSignUpSuccessModal show={showEmailSignUpSuccess} />
        <EmailSignUpErrorModal show={showEmailSignUpError} />
        <SignOutSuccessModal show={showSignOutSuccess} />
        <SignOutErrorModal show={showSignOutError} />
        <FirstTimeLoginSuccessModal show={showFirstTimeLoginSuccess} />
        <FirstTimeLoginErrorModal show={showFirstTimeLoginError} />
        <RequestPasswordResetErrorModal show={showRequestPasswordResetError} />
        <RequestPasswordResetSuccessModal show={showRequestPasswordResetSuccess} />
      </div>
    );
  }
}

export default AuthModals;
