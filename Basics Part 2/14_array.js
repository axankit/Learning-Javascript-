/*
1. mdn documentation
2. deep copy(stack) and  shallow copy(heap reference )
3. In browser we declare array. we notice in protoype there is prototype (which is going to dicuss later in series)

Array methods
4. .push()
5. .pop()
5. .unshift() append the new data in starting of array. as a result it changes the indexing of whole array

6. .shift() opposite of unshift (remove the first element)

7. why pepole not prefer to use unshift 

8. .includes() 
9. indexof() 
if we ask the index of number which is not inside in array it always the output => -1

10. .join() 
noticable point is typeof of output is string

most intresting section and also interview question section

11. slice() and splice()
12. difference between them.

slice() it will give you the portion of array like (0,3) and the last index exclude from output. it will not change the OG array.

splice() it will delete the portion of array like (0,3) and even the last index include. it will change the OG array.
*/
console.log("    ")

let myarr = [1,2,"ankit",5,3]
console.log("OG",myarr)
console.log(typeof myarr)

// myarr.push(5)
// console.log("B ",myarr)

// myarr.pop()

// console.log(myarr)

// myarr.unshift(0)
// console.log("B ",myarr)

// myarr.shift()
// console.log(myarr)

// console.log(myarr.includes(2))
// it also focus on datatype as well


// console.log(myarr.indexOf("ankit"))

// let first =myarr.join()
// console.log(myarr)
// console.log(first)
// console.log(typeof first);

// let second=myarr.slice(0,3)
// console.log("slice ",second)
// console.log(typeof second)
// console.log(myarr);

// let third=myarr.splice(0,3)
// console.log("splice ",third)
// console.log(typeof third)

// console.log(myarr);



const animals = ['cat', 'dog', 'elephant'];
// const lastAnimal = animals.pop(); // 'lastAnimal' is 'elephant', and 'animals' is now ['cat', 'dog']

console.log(animals.pop())
// console.log(lastAnimal)

// console.log(animals)
















console.log("    ")
