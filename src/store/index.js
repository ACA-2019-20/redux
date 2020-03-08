import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

function logger({ getState }) {
  return next => action => {
    console.group(action.type);
    console.log("state before dispatch", getState());
    console.log("will dispatch", action);

    const returnValue = next(action);

    console.log("state after dispatch", getState());
    console.groupEnd();
    return returnValue;
  };
}

const loadStateFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("counter-app")) || {};
};

const initialState = loadStateFromLocalStorage();

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk, logger)
);

const saveStateToLocalStorage = () => {
  const state = store.getState();
  localStorage.setItem("counter-app", JSON.stringify(state));
};

store.subscribe(saveStateToLocalStorage);

export default store;
