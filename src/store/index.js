import { createStore } from "redux";
import rootReducer from "../reducers";

// optional
const initialState = {
  count: 0
};

export default createStore(rootReducer, initialState);
