console.log("      ");

/* 
Most Important topics in Javascript 

1. To declare obj in javascript we have two ways
1. Constructor (Singleton is created)
Object.create

2. Literals (Singleton is not created)

We also a learn new term Singleton we are going to learn more about this later

2. 
const first={
     key:"value"
}

Bydefault Datatype of key is always string even you not declare

*/

const first = {
  key: "value",
  "full name": "Ankit Ranjan",
  mysign: "symbol",
};

// console.log(first.key);
// console.log(first["key"])

/* 3. To call obj we have two ways 
now the question is why to use another way. 

"full name":"Ankit Ranjan"

because in the situatuion like these
we cant excess them by using first way as syntax not allowed
  
*/
// console.log(first);
// console.log(first["key"])

/* 
  symbol declare in object 

  when we need to declare key as symbol

  const mysign=Symbol("kuch bhi")
  [mysign]:"kuch bhi",

  we call them by only using
 console.log(second[mysign])
   
*/
const mysign = Symbol("kuch bhi");

const second = {
  key: "value",
  "full name": "Ankit Ranjan",
  [mysign]: "kuch bhi",
  fun: Symbol("excited"),
  learning: "Javascript",
};

// console.log( second[mysign])
// console.log( typeof second.fun);

// console.log(second);

/* freeze in javascript
   if we use freeze method like Object.freeze(second)
   then we can't change anything in obj
*/

// second.learning="Tailwind css"
// console.log(second);

// Object.freeze(second)
// second.learning="React Js"
// console.log(second);

/* declaring a function in obj 
*/
second.third="Raushani"



second.greetings = function () {
  console.log("Hi 👋 ");
};

second.changes = function () {
  console.log(`Hi 👋 ${this["full name"]}`);
};

console.log(second.greetings);
console.log(second.greetings());

console.log(second.changes());

console.log(second)

const myObject = {
  mySymbol: Symbol("This is a symbol property"),
};

console.log("           ");
