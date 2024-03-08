# Rendering Arrays with Map

Let's say we have an array of actor names and on the UI we want to show it dynamically.

🟪 So normally what we have done is:

```jsx
export default function Actor({ name }) {
   return <li>Actor Name: {name}</li>;
}

function App() {
   return (
      <>
         <h1>Vite + React</h1>
         <Actor name={"Hrithik Roshan"}></Actor>
      </>
   );
}
```

<img src="attachments/Pasted image 20240308143546.png">

🟪 Now let us create an array and display on the UI the Actor component along with dynamic name.

```jsx
function App() {
   const actors = ["Sakib Khan", "Amir Khan", "Sunny Deol"];
   return (
      <>
         <h1>Vite + React</h1>
         <Actor name={"Hrithik Roshan"}></Actor>
         {actors.map((actorName) => (
            <Actor name={actorName}></Actor>
         ))}
      </>
   );
}
```

<img src="attachments/Pasted image 20240308143948.png">

🟪 Now let us create an array of Objects

Codes:

```jsx
function App() {
   const singers = [
      { id: 1, name: "Sonu Nigam", age: 55 },
      { id: 2, name: "Hero Alam", age: 45 },
      { id: 3, name: "Mahfuzur Rahman", age: 65 },
   ];
   return (
      <>
         <h1>Vite + React</h1>
         {singers.map((eachSinger) => (
            <Singers singer={eachSinger}></Singers>
         ))}
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
```

Output and Explanation:

<img src="attachments/Pasted image 20240308150003.png">
