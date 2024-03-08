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
