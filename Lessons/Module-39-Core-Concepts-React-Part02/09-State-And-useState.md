### 🟪 Let us recall destructuring first:

```js
// 1
const { name, age } = { name: "Tushar", age: 16 };
// 2
const [first, second] = [33, 56];
// 3 - Returns from a function
function getSomething() {
   return [11, 22];
}

const [firstNum, secondNum] = getSomething();

// 4 - Returns from a function that has parameter

function giveSomething(num) {
   return [num, 100];
}

const [num1, num2] = giveSomething(50);

// 5 - Returns from inner function

function giveUsSomething(num) {
   function innerThing(multiplier) {
      return num * multiplier;
   }
   return [num, innerThing(2)];
}

const [number1, number2] = giveUsSomething(50); // 50, 100
```

```js
// 6 - Returning a number and a function

function useState(num) {
   function updateNum(value) {
      num = value;
   }
   return [num, updateNum];
}

const [count, setCount] = useState(2);
console.log(count); // 2
console.log(setCount); // function updateNum(value)
```

Check it:

<img src="attachments/Pasted image 20240308202135.png">

So we can store the array values in variables using destructing ofcourse.

### 🟪 State:

In our UI there can be variables which need to be updated, example likes, price, quantity etc.

This is called state.

React has given us built in state.

Let us create a component named Counter and export it to `App.jsx` to display to UI.

### 🟪 `useState()` - React Hook

<img src="attachments/Pasted image 20240308205121.png">

as useState is giving us an array, we can destructure like this:

```jsx
import { useState } from "react";

export default function Counter() {
   // useState er bhitor ekta parameter dibo - initial number
   // left side e duita dibo - [count, setCount]
   const [count, setCount] = useState(0);
   return (
      <div>
         <h3>Counter: </h3>
      </div>
   );
}
```

### 🟪 Example

<img src="attachments/Pasted image 20240308210034.png">

Code:

```jsx
import { useState } from "react";

export default function Counter() {
   // useState er bhitor ekta parameter dibo - initial number
   // left side e duita dibo - [count, setCount]
   const [count, setCount] = useState(0);

   const handleAdd = () => {
      const newCount = count + 1;
      setCount(newCount);
   };

   return (
      <div>
         <h3>Counter: {count}</h3>
         <button onClick={handleAdd}>Add</button>
      </div>
   );
}
```

Let us add Minus button:

```jsx
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
```

### 🟪 Another Example:

Let us create a component named `Team`

<img src="attachments/Pasted image 20240309012231.png">
