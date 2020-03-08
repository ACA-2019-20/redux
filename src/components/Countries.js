import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../actions/countries";

export default function Countries() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.countries);

  React.useEffect(() => {
    dispatch(getCountries());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h2>Countries</h2>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
