import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as A from "../actions/email-sign-up";

const initialState = Immutable.fromJS({
  loading: false,
  errors: null,
  form: {}
});

export default createReducer(initialState, {
  [A.EMAIL_SIGN_UP_START]: state => state.set("loading", true),

  [A.EMAIL_SIGN_UP_COMPLETE]: (state) => state.merge(initialState),

  [A.EMAIL_SIGN_UP_ERROR]: (state, {errors}) => state.merge({
    loading: false,
    errors
  }),

  [A.EMAIL_SIGN_UP_FORM_UPDATE]: (state, {key, value}) => {
    return state.mergeDeep({
      form: {
        [key]: value
      }
    });
  }
});
