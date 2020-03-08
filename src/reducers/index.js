import { combineReducers } from "redux";

import countReducer from "./count";
import countriesReducer from "./countries";

export default combineReducers({
  count: countReducer,
  countries: countriesReducer
});
