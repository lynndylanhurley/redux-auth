import authentication from "./reducers/authenticate";
import configure from "./reducers/configure";
import user from "./reducers/user";
import ui from "./reducers/ui";
import emailSignIn from "./reducers/email-sign-in";
import emailSignUp from "./reducers/email-sign-up";
import oAuthSignIn from "./reducers/oauth-sign-in";
import requestPasswordReset from "./reducers/request-password-reset";
import updatePassword from "./reducers/update-password";
import updatePasswordModal from "./reducers/update-password-modal";
import server from "./reducers/server";
import signOut from "./reducers/sign-out";
import destroyAccount from "./reducers/destroy-account";
import {combineReducers} from "redux-immutablejs";

/* reducers */
export const authStateReducer = combineReducers({
  configure,
  emailSignIn,
  emailSignUp,
  signOut,
  authentication,
  requestPasswordReset,
  oAuthSignIn,
  updatePassword,
  updatePasswordModal,
  destroyAccount,
  server,
  ui,
  user
});

/* actions */
export {configure} from "./actions/configure";
export {authenticate} from "./actions/authenticate";
export {emailSignIn} from "./actions/email-sign-in";
export {signOut} from "./actions/sign-out";
export {emailSignUp} from "./actions/email-sign-up";
export {oAuthSignIn} from "./actions/oauth-sign-in";
export {requestPasswordReset} from "./actions/request-password-reset";
export {updatePassword} from "./actions/update-password";
export {updatePasswordModal} from "./actions/update-password-modal";
export {destroyAccount} from "./actions/destroy-account";
export verifyAuth from "./utils/verify-auth";

/* UI */
export AuthModals from "./views/AuthModals";
export EmailSignInForm from "./views/EmailSignInForm";
export EmailSignUpForm from "./views/EmailSignUpForm";
export SignOutButton from "./views/SignOutButton";
export RequestPasswordResetForm from "./views/RequestPasswordResetForm";
export OAuthSignInButton from "./views/OAuthSignInButton";
export UpdatePasswordForm from "./views/UpdatePasswordForm";
export DestroyAccountButton from "./views/DestroyAccountButton";
export TokenBridge from "./views/TokenBridge";
export ButtonLoader from "./views/ButtonLoader";
