import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as A from "../actions/update-password-modal";

const initialState = Immutable.fromJS({
  loading: false,
  errors: null,
  form: {}
});

export default createReducer(initialState, {
  [A.UPDATE_PASSWORD_MODAL_START]: state => state.set("loading", true),

  [A.UPDATE_PASSWORD_MODAL_COMPLETE]: (state) => state.merge(initialState),

  [A.UPDATE_PASSWORD_MODAL_ERROR]: (state, {errors}) => state.merge({
    loading: false,
    errors
  }),

  [A.UPDATE_PASSWORD_MODAL_FORM_UPDATE]: (state, {key, value}) => {
    return state.mergeDeep({
      form: {
        [key]: value
      }
    });
  }
});
