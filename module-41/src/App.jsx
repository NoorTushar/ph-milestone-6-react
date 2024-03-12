import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sunglass from "./components/Sunglass/Sunglass";
import Watch from "./components/Watch/Watch";

function App() {
   const [watches, setWatches] = useState([]);

   useEffect(() => {
      fetch(
         "https://raw.githubusercontent.com/NoorTushar/watches-data/main/watches.json"
      )
         .then((res) => res.json())
         .then((data) => setWatches(data));
   });

   return (
      <>
         <h1>React Module 41</h1>
         {watches.map((eachWatch) => (
            <Watch key={eachWatch.id} watch={eachWatch}></Watch>
         ))}
      </>
   );
}

export default App;
