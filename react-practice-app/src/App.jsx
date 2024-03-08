import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <h1>Vite + React</h1>
         <Greet></Greet>
      </>
   );
}

// 1. Component

let name = "Tushar";
function Greet() {
   return (
      <>
         <h2>Hello {name}. Welcome to the world of React ⚛</h2>
         {/* inline css */}
         <p style={{ backgroundColor: "red" }}>
            This is going to be a very fun journey. We are halfway through our
            course. Let us do it
         </p>
      </>
   );
}

export default App;
