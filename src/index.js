import authentication from "./reducers/authenticate";
import configure from "./reducers/configure";
import user from "./reducers/user";
import emailSignIn from "./reducers/email-sign-in";
import emailSignUp from "./reducers/email-sign-up";
import oAuthSignIn from "./reducers/oauth-sign-in";
import requestPasswordReset from "./reducers/request-password-reset";
import updatePassword from "./reducers/update-password";
import signOut from "./reducers/sign-out";
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
  user
});

/* actions */
export {configure} from "./actions/configure";
export {authenticate} from "./actions/authenticate";
export {emailSignIn, emailSignInFormUpdate} from "./actions/email-sign-in";
export {signOut} from "./actions/sign-out";
export {emailSignUp, emailSignUpFormUpdate} from "./actions/email-sign-up";
export {oAuthSignIn} from "./actions/oauth-sign-in";
export {requestPasswordReset, requestPasswordResetFormUpdate} from "./actions/request-password-reset";
export {updatePassword, updatePasswordFormUpdate} from "./actions/update-password";
export {getApiUrl} from "./utils/session-storage";

/* UI */
export {
  EmailSignInForm,
  EmailSignUpForm,
  SignOutButton,
  SignOutLink,
  RequestPasswordResetForm,
  OAuthSignInButton,
  UpdatePasswordForm
} from "./views/default";

/* utils */
export {default as fetch} from "./utils/fetch";
