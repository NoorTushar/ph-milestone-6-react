import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "../Bottle/Bottle.css";
import { addToLS, getStoredCart, removeFromLS } from "../../Utils/localStorage";
import Cart from "../Cart/Cart";

export const Bottles = () => {
   const [bottles, setBottles] = useState([]);

   const [cartItems, setCartItems] = useState([]);

   useEffect(() => {
      fetch("bottles.json")
         .then((res) => res.json())
         .then((data) => setBottles(data));
   }, []);

   // load cart from local storage

   useEffect(() => {
      //   console.log(`call the use effect`, bottles.length);
      if (bottles.length > 0) {
         const storedCart = getStoredCart();
         const savedCart = [];
         //  console.log(storedCart, bottles);
         for (const id of storedCart) {
            console.log(id);
            const bottle = bottles.find((eachBottle) => eachBottle.id === id);
            console.log(bottle);
            if (bottle) {
               savedCart.push(bottle);
            }
         }
         console.log("saved cart:", savedCart);
         setCartItems(savedCart);
      }
   }, [bottles]);

   const handleAddToCart = (bottle) => {
      console.log(bottle);
      const newCart = [...cartItems, bottle];
      setCartItems(newCart);

      // adding it to the LS
      addToLS(bottle.id);
   };

   const handleRemoveFromCart = (id) => {
      // visual cart remove
      // cart e kintu object ase, shudhu id na
      const remainingCart = cartItems.filter((eachItem) => eachItem.id !== id);

      setCartItems(remainingCart);
      // local storage remove
      removeFromLS(id);
   };
   return (
      <div>
         <h2>Bottles Here</h2>
         <Cart
            key={cartItems.id}
            cart={cartItems}
            handleRemoveFromCart={handleRemoveFromCart}
         ></Cart>
         <div className="bottle-container">
            {bottles.map((eachBottle) => (
               <Bottle
                  handleAddToCart={handleAddToCart}
                  key={eachBottle.id}
                  bottle={eachBottle}
               ></Bottle>
            ))}
         </div>
      </div>
   );
};
