export default function Singers({ singer }) {
   const { name, age } = singer;
   return (
      <div>
         <h3>Singer Name: {name}</h3>
         <p>Singer Age: {age}</p>
      </div>
   );
}
