### 🟪 Option 1 :

```jsx
export default function Todo({ task, isDone }) {
   if (isDone) {
      return <li>{task} is done.</li>;
   } else {
      return <li>{task} is not done yet.</li>;
   }
}
```

```jsx
function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <h1>Vite + React</h1>
         <Todo task="Learn React" isDone={true}></Todo>
         <Todo task="Revise the module" isDone={false}></Todo>
         <Todo task="Quiz" isDone={false}></Todo>
      </>
   );
}
```

<img src="attachments/Pasted image 20240308012234.png">

### 🟪 Option 2:

You can modify the above code like this, because once it returns something, it will go out of the function scope.

```jsx
export default function Todo({ task, isDone }) {
   if (isDone) {
      return <li>{task} is done.</li>;
   }

   return <li>{task} is not done yet.</li>;
}
```

### 🟪 Option 3: Ternary Operator

Below is a static way to write finish and work on. We are repeating `li` on two lines.

<img src="attachments/Pasted image 20240308013956.png">

We can simply use `ternary operation` inside to reduce the code to one line:

```js
export default function Todo({ task, isDone }) {
   return (
      <li>
         {isDone ? "Finish" : "Work On: "} : {task}
      </li>
   );
}
```

<img src="attachments/Pasted image 20240308014642.png">

### 🟪 Option 4: AND Operator `&&`

Let us say, we only want to run something if condition is met or if truthy.

```jsx
export default function Todo({ task, isDone }) {
   return (
      <li>
         {task} {isDone && ": Completed"}
      </li>
   );
}
```

<img src="attachments/Pasted image 20240308021430.png">

### 🟪 Option 5: OR Operator `||`

Let us say we want to run something when it is `not` true.

```jsx
export default function Todo({ task, isDone }) {
   return (
      <li>
         {task} {isDone || ": Not Completed"}
      </li>
   );
}
```

<img src="attachments/Pasted image 20240308021910.png">

### 🟪 Option 6: Assign Value to a Variable based on rendering.

```jsx
export default function Todo({ task, isDone }) {
   let myLi;

   if (isDone) {
      myLi = <li> {task} is done ✅ </li>;
   } else {
      myLi = <li> {task} is yet to be done ⛔️ </li>;
   }

   return myLi;
}
```

<img src="attachments/Pasted image 20240308023624.png">
