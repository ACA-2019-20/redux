import { ADD, SUB, RESET } from "../actions/constants";

export default function countReducer(state = 0, action) {
  switch (action.type) {
    case ADD:
      return state + 1;
    case SUB:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
}
