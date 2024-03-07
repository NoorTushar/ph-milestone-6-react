# JSX-Rules

App.jsx file if you want can make it like this:

<img src="attachments/Pasted image 20240307185855.png">

Rules of JSX

1. Returns a single root element - because a single function can only return one thing

if you want to wrap multiple elements, wrap them inside a 🔥 `fragment` `<> </>`

2. You have to close all tags.

Example, `<img> </img>` or `<li> </li>`

3. Use camelCase.

Example, remember on html we used `onclick`. Here write `onClick`

🔥 And we cannot write `class` to define classes for HTMLs. We now have to write 🔥 `className`

4. Curly Braces for dynamic coding.

Use curly braces `{ }`

Example,

-  `<h1>My name is {name}</h1>`
-  `<img src={imgSource}>  </img>`

5. To write inline CSS with Curly Braces

when you need an inline style, you pass an `object` to the style attribute.

Example,

```
<ul style={{ backgroundColor : "red" , color : "yellow"}}>
	<li> </li>
	<li> </li>
	<li> </li>
</ul>
```

### 🟪 Let us create our first component

<img src="attachments/Pasted image 20240307211916.png">

### 🟪 Let us create our first dynamic component

<img src="attachments/Pasted image 20240307212302.png">
