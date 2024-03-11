import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
   const [countries, setCountries] = useState([]);

   const [visitedCountries, setVisitedCountries] = useState([]);

   const handleVisitedCountry = (countryParam) => {
      console.log(`I am a visited country`);
      console.dir(countryParam);

      const newVisitedCountries = [...visitedCountries, countryParam];
      setVisitedCountries(newVisitedCountries);
   };

   useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
         .then((res) => res.json())
         .then((data) => setCountries(data));
   }, []);

   return (
      <div>
         <h3>Total Countries : {countries.length}</h3>
         <div>
            <h4>Visited Countries: {visitedCountries.length}</h4>
            <ul>
               {visitedCountries.map((eachCountry) => (
                  <li key={eachCountry.cca3}>{eachCountry.name.common}</li>
               ))}
            </ul>
         </div>
         <div className="country-container">
            {countries.map((eachCountry) => {
               return (
                  <Country
                     key={eachCountry.cca3}
                     handleVisitedCountry={handleVisitedCountry}
                     country={eachCountry}
                  ></Country>
               );
            })}
         </div>
      </div>
   );
};

export default Countries;
