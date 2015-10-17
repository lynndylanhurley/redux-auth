import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as A from "../actions/destroy-account";

const initialState = Immutable.fromJS({
  loading: false,
  errors: null
});

export default createReducer(initialState, {
  [A.DESTROY_ACCOUNT_START]: state => state.set("loading", true),

  [A.DESTROY_ACCOUNT_COMPLETE]: (state) => state.merge(initialState),

  [A.DESTROY_ACCOUNT_ERROR]: (state, {errors}) => state.merge({
    loading: false,
    errors
  })
});
