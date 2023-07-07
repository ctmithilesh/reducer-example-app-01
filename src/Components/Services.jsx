import React, { useContext } from "react";
import { CountryContext } from "../Contexts/countryContext";

const Services = () => {
  const { state, dispatch } = useContext(CountryContext);

  const handleCountryChange = () => {
    if (state.country === "Australia") {
      dispatch({
        type: "SET_COUNTRY",
        payload: "India",
      });
    }
    if (state.country === "India") {
      dispatch({
        type: "SET_COUNTRY",
        payload: "Australia",
      });
    }
  };
  return (
    <div>
      <h2>Services</h2>
      <p>Country: {state.country} </p>
      <button onClick={handleCountryChange}> Change Country </button>
    </div>
  );
};

export default Services;
