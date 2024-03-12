1. install react as always
2. now go to rest countries website and get the api `https://restcountries.com/v3.1/all`
3. now organize the folders

<img src="attachments/Pasted image 20240310230021.png">

src -> folder components -> folder Countries -> file Countries.jsx, file Countries.css

4. Countries component e countries gula load korano.

```jsx
import { useEffect, useState } from "react";

const Countries = () => {
   const [countries, setCountries] = useState([]);

   useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
         .then((res) => res.json())
         .then((data) => setCountries(data));
   }, []);

   return (
      <div>
         <h3>Countries : {countries.length}</h3>
      </div>
   );
};

export default Countries;
```

5. Next country name er component folder and component banabo.

6. Let us deal with the id or key error

<img src="attachments/Pasted image 20240311000851.png">

error gone:

<img src="attachments/Pasted image 20240311002458.png">

Let us show all flags

<img src="attachments/Pasted image 20240311003048.png">

Turning off the error above

<img src="attachments/Pasted image 20240311005052.png">

### 🟪 Now objective is to show the country cards in gallery view. Example, 3 cards in a row.

So we have to go to the abbu of country component, which is Countries component. Make a css file.

<img src="attachments/Pasted image 20240311005917.png">

CSS:

<img src="attachments/Pasted image 20240311010354.png">

back to Countries.jsx

<img src="attachments/Pasted image 20240311010501.png">

code:

```jsx
import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
   const [countries, setCountries] = useState([]);

   useEffect(() => {
      fetch("https://restcountries.com/v3.1/all")
         .then((res) => res.json())
         .then((data) => setCountries(data));
   }, []);

   return (
      <div>
         <h3>Total Countries : {countries.length}</h3>
         <div className="country-container">
            {countries.map((eachCountry) => {
               console.dir(eachCountry);
               return (
                  <Country
                     key={eachCountry.cca3}
                     country={eachCountry}
                  ></Country>
               );
            })}
         </div>
      </div>
   );
};

export default Countries;
```

### 🟪 Now I want to mark the countries which I have visited by clicking on them.

So first let us create button in each card 'Visited'

<img src="attachments/Pasted image 20240311011453.png">

now,

1. first step is to show visited, or to change its state from false to true. Like below:

<img src="attachments/Pasted image 20240311012142.png">

2. ok now we want to add toggle effect. that is, once we click visited, if we click again we want to change the state back to false.

<img src="attachments/Pasted image 20240311013912.png">

code:

```jsx
const handleVisited = () => {
   //   if (visited === false) {
   //      setVisited(true);
   //   } else {
   //      setVisited(false);
   //   }

   // but pro shortcut is using !

   setVisited(!visited);
};
```

### 🟪 Conditional ClassName and Style

Ok so now we want to change the bg color of the card depending upon the visited state.
Let us create a class and then call it on the Component like this:

Classname:

```css
.visited {
   background-color: rgb(5, 58, 32);
}

.notVisited {
   background-color: rgb(64, 6, 65);
}
```

<img src="attachments/Pasted image 20240311024502.png">

Style:

<img src="attachments/Pasted image 20240311025414.png">

### 🟪 Now we want to show the list of all our visited countries in the top.

##### 🔥🔥 ==Thumb-rule is : Event jeikhane, State o sheikhane, kintu trigger button ta oikhane na o thakte pare.==

on countries.jsx

<img src="attachments/Pasted image 20240311033016.png">

on country.jsx

<img src="attachments/Pasted image 20240311032746.png">

Now let us create a button example, Mark Visited. and attach the function in this button. Also let us pass the country which we got as an argument.

<img src="attachments/Pasted image 20240311142731.png">

### 🟪 Here comes a challenging part. How will you add array items to a state variable?

Using `spread operator` first we have to copy the previous array. And then add the new item and make a new array. Then set the new array as the new value.

<img src="attachments/Pasted image 20240311144759.png">

### 🟪 Now show the visited countries to the UL div as lists.

Loop through the array using map and create li for each item

<img src="attachments/Pasted image 20240311145408.png">
as you are seeing an arrow, pass key into the `li` . As you have the eachCountry object, get the cca3 from there and put it as key. We are not passing it as props but just giving the `key`

<img src="attachments/Pasted image 20240311145636.png">

### 🟪 Pop Drilling. Lets create CountryDetails.jsx + CountryData.jsx

On way to send data from top layer to bottom layer is, we all know and did before, giving props.

<img src="attachments/Pasted image 20240311190549.png">
------>

<img src="attachments/Pasted image 20240311190723.png">

------>

<img src="attachments/Pasted image 20240311190814.png">

### 🟪 Another way to prop drill.

For Receiving Props:

<img src="attachments/Pasted image 20240311191430.png">

To send props:

<img src="attachments/Pasted image 20240311191711.png">

### 🟪 Now comes! We want to search the country based on the country Code.

Let us use cca3 from the countries. And also show on each cards.

<img src="attachments/Pasted image 20240311011057.png">

API URL for Search:

https://restcountries.com/v3.1/alpha/{code}

example,

https://restcountries.com/v3.1/alpha/col - for columbia.
