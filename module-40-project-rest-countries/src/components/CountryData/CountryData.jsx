const CountryData = ({ country, handleVisitedCountry }) => {
   return (
      <div>
         <h3>Country Data:</h3>
         <p>
            <small>name: {country.name.common}</small>
         </p>
      </div>
   );
};

export default CountryData;
