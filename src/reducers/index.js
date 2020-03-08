import { ADD, SUB, RESET } from "../actions/constants";

const initialState = {
  count: 0
};

export default function countReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        count: state.count + 1
      };
    case SUB:
      return {
        count: state.count - 1
      };
    case RESET:
      return {
        count: 0
      };
    default:
      return state;
  }
}
