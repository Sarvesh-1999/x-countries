import React, { useEffect } from "react";
import CountryFlagCard from "../components/CountryFlagCard";

const CountryPage = () => {
  const [countries, setCountries] = React.useState([]);

  useEffect(() => {
    fetch(" https://xcountries-backend.azurewebsites.net/all")
      .then((resp) => {
        resp.json().then((data) => setCountries(data));
      })
      .catch((err) => console.error("Error fetching data: ", err));
  }, []);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7,1fr)",
        gap: "20px",
        width: "100%",
        padding: "20px",
      }}
    >
      {countries.map(({ name, flag, abbr }, idx) => (
        <CountryFlagCard key={idx} name={name} flag={flag} abbr={abbr} />
      ))}
    </div>
  );
};

export default CountryPage;
