import authentication from "./reducers/authenticate";
import user from "./reducers/user";
import emailSignIn from "./reducers/email-sign-in";
import { combineReducers } from "redux-immutablejs";

export {configure} from "./actions/configure";
export {authenticate} from "./actions/authenticate";
export {emailSignIn} from "./actions/email-sign-in";

export const authStateReducer = combineReducers({
  emailSignIn,
  authentication,
  user
});
