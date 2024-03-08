import { useState } from "react";

export default function Counter() {
   // useState er bhitor ekta parameter dibo - initial number
   // left side e duita dibo - [count, setCount]
   const [count, setCount] = useState(0);

   const handleAdd = () => {
      const newCount = count + 1;
      setCount(newCount);
   };

   const handleMinus = () => {
      const newCount = count - 1;
      setCount(newCount);
   };

   return (
      <div>
         <h3>Counter: {count}</h3>
         <button onClick={handleAdd}>Add</button>
         <button onClick={handleMinus}>Minus</button>
      </div>
   );
}
