import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as A from "../actions/configure";

const initialState = Immutable.fromJS({
  loading: true,
  errors: null,
  config: null,
  endpointKeys: null,
  defaultEndpointKey: null,
  currentEndpointKey: null
});

export default createReducer(initialState, {
  [A.CONFIGURE_START]: state => state.set("loading", true),

  [A.STORE_CURRENT_ENDPOINT_KEY]: (state, {currentEndpointKey}) => state.merge({currentEndpointKey}),

  [A.SET_ENDPOINT_KEYS]: (state, {endpointKeys, defaultEndpointKey, currentEndpointKey}) => state.merge({
    endpointKeys, defaultEndpointKey, currentEndpointKey
  }),

  [A.CONFIGURE_COMPLETE]: (state, {config}) => state.merge({
    loading: false,
    errors: null,
    config
  }),

  [A.CONFIGURE_ERROR]: (state, {errors}) => state.merge({
    loading: false,
    errors
  })
});
