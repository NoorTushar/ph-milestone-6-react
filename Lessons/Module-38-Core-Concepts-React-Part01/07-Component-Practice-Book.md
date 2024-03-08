# Mind Blowing loop practice.

## We will learn how to use array map method to return components

Here is the root Component - App()

```jsx
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
```

Here is it's child component - BookStore()

```jsx
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
```

And here is the child component of BookStore Component - Book()

```jsx
export default function Book({ book }) {
   console.log(book);
   const { name, price } = book;
   return (
      <div>
         <p>Book Name is: {name}</p>
         <p>Price is: ${price}</p>
      </div>
   );
}
```

Output:

<img src="attachments/Pasted image 20240308172049.png">

What has happened actually?

<img src="attachments/Pasted image 20240308172707.png">

Great! Now let us apply some styles to each of the Book div.

= We have created a separate file named `Book.css`

```css
.book {
   margin: 20px;
   padding: 20px;
   border: 2px solid lime;
   border-radius: 15px;
}
```

import the css file in the `Book.jsx` file and use `className`

```jsx
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
```

Output:

<img src="attachments/Pasted image 20240308173403.png">
