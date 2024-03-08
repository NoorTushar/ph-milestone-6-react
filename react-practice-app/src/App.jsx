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
   const violetBox = {
      padding: "20px",
      margin: "20px",
      borderRadius: "20px",
      border: "2px solid violet",
   };

   return (
      <>
         <div className="rounded-container">
            <h2>Hello {name}. Welcome to the world of React ⚛</h2>
            {/* inline css */}
            <p style={{ backgroundColor: "red" }}>
               This is going to be a very fun journey. We are halfway through
               our course. Let us do it
            </p>
         </div>

         <div style={violetBox}>
            <h2>Hello {name}. Welcome to the world of React ⚛</h2>
            <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
               dignissimos modi aliquid. Mollitia, possimus. Reiciendis labore
               nobis minus aut nemo!
            </p>
         </div>
      </>
   );
}

export default App;
