console.log("          ")
/*
1. Situation :- when input is more than parameters 
 */

function first (val, ...num){
     return num
}
// let store=[4,5,6]

// console.log(first(2,3,4))

/* 2. Using of object in function */

let user={
     name:"Trishali",
     shopping:560

}

function useobj (anyobj){
   console.log(`Hi 👋 ${anyobj.name} You Total purchase is ${anyobj.shopping} Rs`)
//    return(`Hi 👋 ${anyobj.name} You Total purchase is ${anyobj.shopping} Rs`)
}

// function useobj (something){
//    console.log(`Hi 👋 ${something.name} You Total purchase is ${something.shopping} Rs`)
// }

// useobj()

// useobj(user)

// useobj({
//      name:"Trishali",
//      shopping:888

// })



/* 3. Using of Array in function*/


let second=[2,4,56]

function showme (anyarray){
     console.log(anyarray[2])
}

showme(second)

















console.log("          ")