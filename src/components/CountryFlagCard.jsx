import React from "react";

const CountryFlagCard = ({ name, flag, abbr }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        textAlign: "center",
        borderRadius: "3px",
        maxWidth: "200px",
        padding: "10px",
      }}
    >
      <img src={flag} alt={abbr} height={100} width={100} />
      <h4>{name}</h4>
    </div>
  );
};

export default CountryFlagCard;
