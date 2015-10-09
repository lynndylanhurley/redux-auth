import authentication from "./reducers/authenticate";
import user from "./reducers/user";
import { combineReducers } from "redux-immutablejs";

export {configure} from "./actions/configure";
export {authenticate} from "./actions/authenticate";

export const authStateReducer = combineReducers({
  authentication,
  user
});
