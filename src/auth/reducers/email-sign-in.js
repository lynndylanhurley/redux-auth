import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as A from "../actions/email-sign-in";

const initialState = Immutable.fromJS({
  loading: false,
  errors: null
});

export default createReducer(initialState, {
  [A.EMAIL_SIGN_IN_START]: state => state.set("loading", true),

  [A.EMAIL_SIGN_IN_COMPLETE]: (state) => state.merge({
    loading: false,
    errors: null
  }),

  [A.EMAIL_SIGN_IN_ERROR]: (state, {errors}) => state.merge({
    loading: false,
    errors
  })
});
