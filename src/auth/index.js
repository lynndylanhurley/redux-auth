import authentication from "./reducers/authenticate";
import user from "./reducers/user";
import authenticate from "./actions/authenticate";
import { combineReducers } from "redux";

const authStateReducer = combineReducers({
  authentication,
  user
});

export {
  authenticate,
  authStateReducer
};
