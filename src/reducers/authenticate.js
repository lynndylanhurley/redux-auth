import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as A from "../actions/authenticate";

const initialState = Immutable.fromJS({
  loading: false,
  valid: false,
  errors: null
});

export default createReducer(initialState, {
  [A.AUTHENTICATE_START]: state => state.set("loading", true),

  [A.AUTHENTICATE_COMPLETE]: (state) => {
    return state.merge({
      loading: false,
      errors: null,
      valid: true
    });
  },

  [A.AUTHENTICATE_ERROR]: state => state.merge({
    loading: false,
    errors: "Invalid token",
    valid: false
  })
});
