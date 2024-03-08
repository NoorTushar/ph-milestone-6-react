import("./Book.css");

export default function Book({ book }) {
   const { name, price } = book;
   return (
      <div className="book">
         <p>Book Name is: {name}</p>
         <p>Price is: ${price}</p>
      </div>
   );
}
