/*
Primitive data and Non Primitive data type
On the basis of storing the data and accessing the data. 
*/

/*  
Primitive data type  
    String,Number,Boolean,Null,undefined,BigInt,Symbol

    Null means empty not zero. to understand it better use the example of temperature
    datatype of Null => object

*/

/* Symbols are unique and distinct, even if they have the same description. */

const first =Symbol("123")
console.log(first);

const second =Symbol("123")
console.log(second);

console.log(first == second);
console.log(first === second);



/* With BigInt, we add the n at the end of the number to indicate that it's a BigInt. BigInt can handle really large numbers without running into accuracy issues.

Remember, we use BigInt when we're dealing with numbers beyond the safe range of regular JavaScript numbers, and you want to make sure your calculations are accurate.

The safe range of regular JavaScript numbers is approximately from -9 quadrillion (-9,007,199,254,740,992) to 9 quadrillion (9,007,199,254,740,992). This range includes both positive and negative numbers.
*/

const regularNumber = 9007199254740992; // A large number
const result = regularNumber + 1;

console.log(result); // This might not be what you expect!

const bigIntNumber = 9007199254740992n; // A BigInt
const newResult = bigIntNumber + 1n;

console.log(newResult); // This will work as expected!




/* Non primitive data types ( reference data type) 
Array,Objects and functions 

datatype of function => function (as shown) but its actually object function

*/

const third=function(){
     console.log("This is Ankit Ranjan")
}

console.log(typeof third);


function myFunction() {
     // Function body
   }
   
   console.log(typeof myFunction); // Outputs: "function"
   console.log(Object.prototype.toString.call(myFunction)); // Outputs: "[object Function]"
   