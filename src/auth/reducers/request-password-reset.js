import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as A from "../actions/request-password-reset";

const initialState = Immutable.fromJS({
  loading: false,
  errors: null,
  form: {}
});

export default createReducer(initialState, {
  [A.REQUEST_PASSWORD_RESET_START]: state => state.set("loading", true),

  [A.REQUEST_PASSWORD_RESET_COMPLETE]: (state) => state.merge(initialState),

  [A.REQUEST_PASSWORD_RESET_ERROR]: (state, {errors}) => state.merge({
    loading: false,
    errors
  }),

  [A.REQUEST_PASSWORD_RESET_FORM_UPDATE]: (state, {key, value}) => {
    console.log("updating password request form", key, value);
    return state.mergeDeep({
      form: {
        [key]: value
      }
    });
  }
});
