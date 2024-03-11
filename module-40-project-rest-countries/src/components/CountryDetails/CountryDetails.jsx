import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
   const { country, handleVisitedCountry } = props;
   return (
      <div>
         <h3>Country Details: </h3>
         <hr />
         <CountryData {...props}></CountryData>
      </div>
   );
};

export default CountryDetails;

<AnotherComponent data={1} value={2} />;
function AnotherComponent(props) {
   // Here we will access data and value
   return (
      <div>
         <p>{data}</p>
         <p>{value}</p>
      </div>
   );
}
