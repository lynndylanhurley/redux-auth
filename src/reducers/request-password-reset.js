import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as A from "../actions/request-password-reset";
import { SET_ENDPOINT_KEYS } from "../actions/configure";

const initialState = {
  loading: false,
  errors: null,
  form: {}
};

export default createReducer(Immutable.fromJS({}), {
  [SET_ENDPOINT_KEYS]: (state, {endpoints}) => state.merge(endpoints.reduce((coll, k) => {
    coll[k] = Immutable.fromJS(initialState);
    return coll;
  }, {})),

  [A.REQUEST_PASSWORD_RESET_START]: (state, {endpoint}) => state.setIn([endpoint, "loading"], true),

  [A.REQUEST_PASSWORD_RESET_COMPLETE]: (state, {endpoint}) => state.merge({
    [endpoint]: initialState
  }),

  [A.REQUEST_PASSWORD_RESET_ERROR]: (state, {endpoint, errors}) => state.mergeDeep({
    [endpoint]: {
      loading: false,
      errors
    }
  }),

  [A.REQUEST_PASSWORD_RESET_FORM_UPDATE]: (state, {endpoint, key, value}) => {
    return state.mergeDeep({
      [endpoint]: {
        form: {
          [key]: value
        }
      }
    });
  }
});
