import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as A from "../actions/request-test-buttons";

const initialState = Immutable.fromJS({
  showSuccessModal: false,
  showErrorModal: false,
  lastRequestUrl: null,
  buttons: {}
});

export default createReducer(initialState, {
  [A.REQUEST_TEST_START]: (state, {key}) => state.mergeDeep({
    buttons: {
      [key]: {
        loading: true
      }
    }
  }),

  [A.REQUEST_TEST_COMPLETE]: (state, {key}) => state.mergeDeep({
    buttons: {
      [key]: {
        loading: false
      }
    },
    showSuccessModal: true,
    lastRequestUrl: key
  }),

  [A.REQUEST_TEST_ERROR]: (state, {key}) => state.merge({
    buttons: {
      [key]: {
        loading: false
      }
    },
    showErrorModal: true,
    lastRequestUrl: key
  }),

  [A.DISMISS_REQUEST_TEST_SUCCESS_MODAL]: state => state.merge({
    showSuccessModal: false,
    lastRequestUrl: null
  }),

  [A.DISMISS_REQUEST_TEST_ERROR_MODAL]: state => state.merge({
    showErrorModal: false,
    lastRequestUrl: null
  })
});
