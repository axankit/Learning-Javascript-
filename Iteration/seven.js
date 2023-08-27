console.log("                    ")
/*
const first=[1,2,3,4,5,6,7,8,9,10]
one=[]

first.forEach((val) => {
//  console.log(val+10)
 one.push(val+10)
})

console.log(one)

*/

/*
! Map
chain efffect
 */

const first=[1,2,3,4,5,6,7,8,9,10]

const one =first
               .map((val) => val*10)
               .map( (val) => val+1)
               .filter( (val) => val>=40);



 console.log(one)