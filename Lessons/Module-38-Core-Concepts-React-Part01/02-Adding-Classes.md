# Adding Classes

```jsx
function Student() {
   return (
      <div>
         <h3>I am a student</h3>
         <p>Name: </p>
         <p>Age: </p>
      </div>
   );
}
```

### Adding Classes

How will we add class to the div above?

1. going to `app.css` and giving some styles

<img src="attachments/Pasted image 20240307214908.png">

<img src="attachments/Pasted image 20240307215056.png">

2. creating the style object inside the component

<img src="attachments/Pasted image 20240307220023.png">

codes below:

```jsx
function Developer() {
   const developerStyle = {
      padding: "20px",
      margin: "20px",
      border: "2px solid purple",
      borderRadius: "10px",
   };

   return (
      <div style={developerStyle}>
         <h3>I am a developer</h3>
         <p>Name: </p>
      </div>
   );
}
```
