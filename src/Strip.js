import React from "react";

function Strip({ CountryCode ,Country}) {
  return (
    // <div>
    <img
      src={`https://www.countryflags.io/${CountryCode}/shiny/64.png`}
      alt={`${CountryCode}`}
          className="m-0 flag-strip"
          title={Country}
    ></img>
    // </div>
  );
}

export default Strip;
