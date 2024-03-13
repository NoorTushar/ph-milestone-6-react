import React from "react";
import "./Sunglass.css";
import Watch from "../Watch/Watch";
import {
   add,
   multiply,
   divideTheFirstNumberBySecondNumber as divide,
} from "../../Utils/calculate";

const Sunglass = () => {
   const firstNum = 10;
   const secondNum = 20;

   const sum = add(firstNum, secondNum);
   const product = multiply(firstNum, secondNum);

   const division = divide(firstNum, secondNum);

   return (
      <div>
         <Watch></Watch>
      </div>
   );
};

export default Sunglass;
