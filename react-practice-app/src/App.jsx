import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Actor from "./Actor";
import BookStore from "./BookStore";

function App() {
   const bookList = [
      { id: 1, name: "Growing Up", price: 550 },
      { id: 2, name: "Atomic Habits", price: 450 },
      { id: 3, name: "Limitless", price: 655 },
   ];

   return (
      <>
         <h1>Vite + React</h1>
         <BookStore books={bookList}></BookStore>
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
