/* 
Lets learn more about array

1. We use push method 
   we use concat method
   we use spread of method 

   with the objective of merging array into another

2. we are learn about flat method 

3. isArray

interview related question
4. .from (in case if it is not able to make array. it will return empty array.)

5. .of

6. learn more about isArray, .from and .of [ sir recommended ]
*/

console.log("   ")


let marvelheros=["Ironman","Spiderman","Doctor strange"]
let dcheros=["wonderwoman","superman","flash"]


// marvelheros.push(dcheros)
// console.log(marvelheros);

// push changes the OG array

// let first=marvelheros.concat(dcheros)
// console.log(marvelheros);
// console.log(first);

// concat does not changes the OG array

// let second=[...marvelheros,...dcheros]
// console.log(second);
// console.log(marvelheros);

// const deeplyNestedArray = [1, [2, [3, [4, [5]]]]];
// const flattenedDeepArray = deeplyNestedArray.flat(Infinity); // flattenedDeepArray is [1, 2, 3, 4, 5]

// console.log(deeplyNestedArray);
// console.log(flattenedDeepArray);


console.log(Array.isArray(marvelheros))
console.log(marvelheros);
// console.log(third);




















console.log("   ")