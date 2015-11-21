import Immutable from "immutable";
import { createReducer } from "redux-immutablejs";
import * as A from "../actions/demo-ui";

const initialState = Immutable.fromJS({
  theme: "materialUi",
  endpoint: "default"
});

export default createReducer(initialState, {
  [A.UPDATE_DEMO_THEME]: (state, {theme}) => state.merge({theme}),
  [A.UPDATE_DEMO_ENDPOINT]: (state, {endpoint}) => state.merge({endpoint})
});
