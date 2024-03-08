import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Actor from "./Actor";

function App() {
   const singers = [
      { id: 1, name: "Sonu Nigam", age: 55 },
      { id: 2, name: "Hero Alam", age: 45 },
      { id: 3, name: "Mahfuzur Rahman", age: 65 },
   ];
   return (
      <>
         <h1>Vite + React</h1>
         {singers.map((eachSinger) => (
            <Singers singer={eachSinger}></Singers>
         ))}
      </>
   );
}

function Singers({ singer }) {
   const { name, age } = singer;
   return (
      <div>
         <h3>Singer Name: {name}</h3>
         <p>Singer Age: {age}</p>
      </div>
   );
}

export default App;
