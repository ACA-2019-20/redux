import {
  GET_COUNTRIES,
  GET_COUNTRIES_FAILURE,
  GET_COUNTRIES_SUCCESS
} from "../actions/constants";

const initialState = {
  data: [],
  error: "",
  loading: false
};

export default function countriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        loading: true
      };
    case GET_COUNTRIES_FAILURE:
      return {
        data: [],
        error: "Some error",
        loading: false
      };
    case GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload
      };
    default:
      return state;
  }
}
