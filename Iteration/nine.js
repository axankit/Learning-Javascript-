/* reduce */

const sum=[1,2,3]

let total=sum.reduce((val,boss) =>
{
     // console.log(val,boss)
 return val+ boss
},0)

// console.log(total)

let shoppingCart=[
     {
          course:"Javascript",
          price:999
     },
     {
          course:"Python",
          price:1999
     },
     {
          course:"React js",
          price:2999
     },
     {
          course:"Backend Development",
          price:4999
     },


]

let first=shoppingCart.reduce( (a,b) => {
  return a+b.price
},0)

console.log(first)