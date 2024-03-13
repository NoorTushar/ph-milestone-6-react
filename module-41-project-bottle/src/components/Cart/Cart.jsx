import "./Cart.css";
import PropTypes from "prop-types";

const Cart = ({ cart, handleRemoveFromCart }) => {
   return (
      <div>
         <h3>Cart: {cart.length}</h3>
         <div className="cart-container">
            {cart.map((eachBottle) => (
               <div className="cart-item" key={eachBottle.id}>
                  <img src={eachBottle.img} alt="bottle-image"></img>
                  <button onClick={() => handleRemoveFromCart(eachBottle.id)}>
                     {/* handleRemoveFromCart('xjasa4kjhsrhwmbzuw') */}
                     Remove
                  </button>
               </div>
            ))}
         </div>
      </div>
   );
};

Cart.propTypes = {
   cart: PropTypes.array.isRequired,
   handleRemoveFromCart: PropTypes.func.isRequired,
};

export default Cart;
