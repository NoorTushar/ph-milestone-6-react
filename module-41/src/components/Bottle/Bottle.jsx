import "./Bottle.css";
import { PropTypes } from "prop-types";

const Bottle = ({ bottle, handleAddToCart }) => {
   const { name, price, img } = bottle;
   return (
      <div className="bottle">
         <h3>Name: {name}</h3>
         <p>Price: {price}</p>
         <img style={{ width: "100px" }} src={img} alt="" />
         <br />
         <button
            onClick={() => {
               handleAddToCart(bottle);
            }}
         >
            Purchase
         </button>
      </div>
   );
};

Bottle.propTypes = {
   bottle: PropTypes.object.isRequired,
   handleAddToCart: PropTypes.func.isRequired,
};

export default Bottle;
