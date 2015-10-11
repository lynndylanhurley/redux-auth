import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as A from "../actions/sign-out";

const initialState = Immutable.fromJS({
  loading: false,
  errors: null
});

export default createReducer(initialState, {
  [A.SIGN_OUT_START]: state => state.set("loading", true),

  [A.SIGN_OUT_COMPLETE]: (state) => state.merge({
    loading: false,
    errors: null
  }),

  [A.SIGN_OUT_ERROR]: (state, { errors }) => {
    return state.merge({
      loading: false,
      errors
    });
  }
});
