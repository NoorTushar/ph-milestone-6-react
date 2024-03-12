import React from "react";

const Watch = ({ watch }) => {
   const { model, price } = watch;
   return (
      <div>
         <p>Name: {model}</p>
         <p>price: {price}</p>
      </div>
   );
};

export default Watch;
