import Auth from "j-toker";
import {
  authenticateStart,
  authenticateComplete,
  authenticateError
} from "./authenticate";
import {
  showFirstTimeLoginSuccessModal,
  showFirstTimeLoginErrorModal,
  showPasswordResetSuccessModal,
  showPasswordResetErrorModal
} from "./ui";

export function configure(config) {
  return dispatch => {
    dispatch(authenticateStart());

    // only allow authenticaton from client-evaluated code.
    if (window) {
      let jqPromise = Auth.configure(config);

      jqPromise.then(user => dispatch(authenticateComplete(user)));

      return Promise
        .resolve(jqPromise)
        .then(() => {
          if (Auth.firstTimeLogin) {
            console.log("dispatching is first time login");
            dispatch(showFirstTimeLoginSuccessModal());
          }

          if (Auth.mustResetPassword) {
            console.log("dispatching must reset password");
            dispatch(showPasswordResetSuccessModal());
          }
        })
        .catch(({reason}) => {
          if (Auth.firstTimeLogin) {
            console.log("dispatching is first time login error");
            dispatch(showFirstTimeLoginErrorModal());
          }

          if (Auth.mustResetPassword) {
            console.log("dispatching must reset password error");
            dispatch(showPasswordResetErrorModal());
          }

          dispatch(authenticateError([reason]));
        });

    } else {
      let reason = "Must configure from browser.";
      dispatch(authenticateError([reason]));
      return Promise.reject(reason);
    }
  };
}
