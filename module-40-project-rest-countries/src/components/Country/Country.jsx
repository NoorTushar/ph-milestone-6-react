import { useState } from "react";
import "./Country.css";
import CountryDetails from "../CountryDetails/CountryDetails";
const Country = ({ country, handleVisitedCountry }) => {
   const { name, flags, population, area, cca3 } = country;

   const [visited, setVisited] = useState(false);

   const handleVisited = () => {
      //   if (visited === false) {
      //      setVisited(true);
      //   } else {
      //      setVisited(false);
      //   }

      // but pro shortcut is using !

      setVisited(!visited);
   };

   return (
      <div className={`country ${visited ? "visited" : `notVisited`}`}>
         <h3 style={{ color: visited ? "skyblue" : "white" }}>
            Name: {name?.common}
         </h3>

         <img className="flag" src={flags?.png} alt="" />
         <p>Population: {population}</p>
         <p>Area: {area}</p>
         <p>
            <small>Code: {cca3}</small>
         </p>
         <button
            onClick={() => {
               handleVisitedCountry(country);
            }}
            style={{ marginRight: "10px" }}
         >
            Mark Visited
         </button>
         <button onClick={handleVisited}>Visited</button>
         <p>
            {visited ? "I have visited this country" : "I have NOT visited."}
         </p>
         <hr />
         <CountryDetails
            country={country}
            handleVisitedCountry={handleVisitedCountry}
         ></CountryDetails>
      </div>
   );
};

export default Country;
