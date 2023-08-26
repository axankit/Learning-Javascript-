/*
If shorthand notation


if (2==2){
     console.log("lets do it.")
}

if (2===2) console.log("Challenge Accepted");

console.log("Jarvis")
*/


/* Switch
//   Break  :- If break is not there there other cases will not got going to match

  execpt default

Chat GPT
If you forget to put a "break" after a "case," the program doesn't stop—it continues into the next "case."
This can lead to unexpected behavior, as the code might execute multiple cases in a row, even if the values don't match.

  
let month=3;

switch (month) {
     case 1:
          console.log("January")
          break;
     case 2:
          console.log("February")
          break;
     case 3:
          console.log("March")
          break;
     case 3:
          console.log("April")
          break;

     default:
          break;
}
*/


/* Falsy Values
 false,0,-0,BigInt 9n, " ", null, undefined, Nan

*/



/* Truthy Values
  "0","False"," ",[],{}, function (){}

  Any value inside string.
*/


/* How to determine whether array or object is empty 

const array=[]

if (array.length==0) {
     console.log("Array is Empty")
}

const anyobj=("a,v");
// const anyobj={};

console.log(Object.keys(anyobj));

if ((Object.keys(anyobj)).length===0) {
     console.log("Object is Empty")
}

We also learn about something intresting the quirky of behaviour of javascript
*/

/* Nullish coalescing operator (??)
we will learn about more in detail later 

Null or Undefined ?? anything ?? something
then it prefer anything

it always choose first one after Null or Undefined
*/

/* Terninary Operator

condition ? true:false
*/

(3>4)? console.log("ok"):console.log("not ok")