import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as A from "../actions/destroy-account";
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

  [A.DESTROY_ACCOUNT_START]: (state, {endpoint}) => state.setIn([endpoint, "loading"], true),

  [A.DESTROY_ACCOUNT_COMPLETE]: (state, {endpoint}) => state.merge({
    [endpoint]: initialState
  }),

  [A.DESTROY_ACCOUNT_ERROR]: (state, {endpoint, errors}) => state.merge({
    [endpoint]: {
      loading: false,
      errors
    }
  })
});
