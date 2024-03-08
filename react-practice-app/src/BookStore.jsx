import Book from "./Book";

export default function BookStore({ books }) {
   // Destructuring books from props correctly
   console.log(books);

   return (
      <div>
         <h3>Welcome to the Book Store</h3>
         <div>
            <h3>Total no of books: {books.length}</h3>
            {books.map((eachBook) => (
               <Book book={eachBook}></Book>
            ))}
         </div>
      </div>
   );
}
