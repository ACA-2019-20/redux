import {
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAILURE
} from "./constants";

const getCountriesLoading = () => ({
  type: GET_COUNTRIES
});

const getCountriesSuccess = payload => ({
  type: GET_COUNTRIES_SUCCESS,
  payload
});

const getCountriesFailure = error => ({
  type: GET_COUNTRIES_FAILURE,
  error
});

export const getCountries = () => {
  return function(dispatch) {
    getCountriesLoading();

    const url = "https://restcountries.eu/rest/v2/all";

    fetch(url)
      .then(r => r.json())
      .then(r => dispatch(getCountriesSuccess(r)))
      .catch(e => dispatch(getCountriesFailure(e)));
  };
};
