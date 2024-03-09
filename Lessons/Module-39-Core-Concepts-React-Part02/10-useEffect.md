Let's you deal with asynchronous tasks like fetching datas from APIs.

### 🟪 How to use

1. import `useEffect()`
2. call it at the top of you component and put some code inside.
3. we need to pass `1. a call back function` and `2. dependency
4. in some cases we might want to use `cleanup` at the end of the code.
   `

### 🟪 Types of dependecies:

1. We pass no dependency but it will run at every render
2. We pass [ ], this will run once after the initial render
3. We pass [a,b], this will run if either `a` or `b` is changed after last render.

### 🟪 Example 1: Let us load some data from an external resources

-  External thike amra nibo let's say JSON placeholders websites
-  So amra data paiteo pari, na o paite pari, so aita amra akta state e rakhbo.

<img src="attachments/Pasted image 20240309020103.png">

<img src="attachments/Pasted image 20240309021335.png">

Codes below:

```jsx
import { useEffect, useState } from "react";

export default function User() {
   // Step 01:
   const [users, setUsers] = useState([]);

   // Step 02:
   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((res) => res.json())
         .then((data) => setUsers(data));
   }, []);

   return (
      <div>
         <h3>Users: {users.length}</h3>
      </div>
   );
}

/**
 * 1. Declare a state to hold the data
 * 2. call the useEffect(cb, dependency)
 * 3. load the data using fetch or async await
 * 4. set the state now to get the state
 */
```
