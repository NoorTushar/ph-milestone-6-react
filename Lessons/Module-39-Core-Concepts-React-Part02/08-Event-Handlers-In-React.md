# Event handlers in React

🟪 The difference in React to handle an event. We cannot use ( ) after onClick

<img src="attachments/Pasted image 20240308192614.png">

`1. you have to write onClick`
`2. you have to just write the name of the function and don't call it`

🟪 You can directly write the function inside the HTML element like this:

```jsx
<>
   <h2>React Core Concepts - 02</h2>
   <button onClick={handleClick}>Click Me</button>
   <button
      onClick={() => {
         alert("2nd button is clicked");
      }}
   >
      Click Me 2
   </button>
</>
```

So how do we pass arguements to functions if we cannot use ( ) directly after onClick?

Use Arrow Function, callback function.

```jsx
function App() {
   const addFive = (num) => {
      alert(num + 5);
   };
   return (
      <>
         <h2>React Core Concepts - 02</h2>
         <button
            onClick={() => {
               addFive(20); //25
            }}
         >
            Click Me
         </button>
      </>
   );
}
```
