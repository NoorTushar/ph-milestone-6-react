// 1
const { name, age } = { name: "Tushar", age: 16 };
// 2
const [first, second] = [33, 56];
// 3 - Returns from a function
function getSomething() {
   return [11, 22];
}

const [firstNum, secondNum] = getSomething();

// 4 - Returns from a function that has parameter

function giveSomething(num) {
   return [num, 100];
}

const [num1, num2] = giveSomething(50);

// 5 - Returns from inner function

function giveUsSomething(num) {
   function innerThing(multiplier) {
      return num * multiplier;
   }
   return [num, innerThing(2)];
}

const [number1, number2] = giveUsSomething(50); // 50, 100

// 6 - Returning a number and a function

function useState(num) {
   function updateNum(value) {
      num = value;
   }
   return [num, updateNum];
}

const [count, setCount] = useState(2);
console.log(count); // 2
console.log(setCount); // function updateNum(value)
