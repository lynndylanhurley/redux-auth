import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as A from "../actions/oauth-sign-in";
import { SET_ENDPOINT_KEYS } from "../actions/configure";

const initialState = {
  loading: false,
  errors: null
};

export default createReducer(Immutable.fromJS({}), {
  [SET_ENDPOINT_KEYS]: (state, {endpoints}) => state.merge(endpoints.reduce((coll, k) => {
    coll[k] = Immutable.fromJS(initialState);
    return coll;
  }, {})),

  [A.OAUTH_SIGN_IN_START]: (state, {endpoint}) => state.setIn([endpoint, "loading"], true),

  [A.OAUTH_SIGN_IN_COMPLETE]: (state, {endpoint}) => state.mergeDeep({
    [endpoint]: {
      loading: false,
      errors: null
    }
  }),

  [A.OAUTH_SIGN_IN_ERROR]: (state, {endpoint, errors}) => state.mergeDeep({
    [endpoint]: {
      loading: false,
      errors
    }
  })
});
