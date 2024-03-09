Let us recap the `useEffect` by creating a new component `Friends.jsx`

<img src="attachments/Pasted image 20240309022447.png">

<img src="attachments/Pasted image 20240309023158.png">

Now we will create a new component called `Friend`

<img src="attachments/Pasted image 20240309025647.png">

🟪 All Codes:

App.jsx

```jsx
import "./App.css";
import Friends from "./Friends";

function App() {
   return (
      <>
         <h2>React Core Concepts - 02</h2>
         <Friends></Friends>
      </>
   );
}

export default App;
```

Friends.jsx

```jsx
import { useEffect, useState } from "react";
import Friend from "./Friend";
import "./Box.css";
export default function Friends() {
   // Step 01:
   const [friends, setFriends] = useState([]);
   // if no friends is found, an empty array will be returned.

   // Step 02:
   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((res) => res.json())
         .then((data) => setFriends(data));
   }, []);

   return (
      <div className="box">
         <h3>Friends: {friends.length}</h3>
         {friends.map((friend) => {
            return <Friend friend={friend}></Friend>;
         })}
      </div>
   );
}

/**
 * Step 01: Declare a state to hold the data
 * Step 02: use effect with a callback and dependency array
 * Step 03: inside the callback use fetch to load data
 * Step 04: set the loaded data to the state
 * Step 05: display data on the component
 */
```

Friend.jsx

```jsx
import "./Box.css";
export default function Friend({ friend }) {
   const { name, email } = friend;

   return (
      <div className="box">
         <h4>Name: {name}</h4>
         <p>Email: {email}</p>
      </div>
   );
}
```
