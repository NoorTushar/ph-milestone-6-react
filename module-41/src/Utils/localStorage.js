const getStoredCart = () => {
   const storedCartString = localStorage.getItem("cart");
   if (storedCartString) {
      return JSON.parse(storedCartString);
   }

   return [];
};

const saveCartToLS = (cart) => {
   const cartStringified = JSON.stringify(cart);
   localStorage.setItem("cart", cartStringified);
};

const addToLS = (id) => {
   const cart = getStoredCart();
   cart.push(id);

   saveCartToLS(cart);
};

const removeFromLS = (id) => {
   const cart = getStoredCart();

   // filter option, but aita korar jonne kortesi,
   // because filter e shob remove hoy.
   // long run e splice use korte hobe against index

   // removing every id which matched
   const remaining = cart.filter((eachId) => eachId !== id);

   saveCartToLS(remaining);
};

export { addToLS, getStoredCart, removeFromLS };
