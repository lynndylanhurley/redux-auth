import authentication from "./reducers/authenticate";
import user from "./reducers/user";
import emailSignIn from "./reducers/email-sign-in";
import emailSignUp from "./reducers/email-sign-up";
import requestPasswordReset from "./reducers/request-password-reset";
import signOut from "./reducers/sign-out";
import {combineReducers} from "redux-immutablejs";

/* reducers */
export const authStateReducer = combineReducers({
  emailSignIn,
  emailSignUp,
  signOut,
  authentication,
  requestPasswordReset,
  user
});

export authUiStateReducer from "./reducers/ui";

/* actions */
export {configure} from "./actions/configure";
export {authenticate} from "./actions/authenticate";
export {emailSignIn} from "./actions/email-sign-in";
export {signOut} from "./actions/sign-out";
export {emailSignUp} from "./actions/email-sign-up";
export {requestPasswordReset} from "./actions/request-password-reset";

/* UI */
export AuthModals from "./views/AuthModals";
export EmailSignInForm from "./views/EmailSignInForm";
export EmailSignUpForm from "./views/EmailSignUpForm";
export SignOutButton from "./views/SignOutButton";
export RequestPasswordResetForm from "./views/RequestPasswordResetForm";
