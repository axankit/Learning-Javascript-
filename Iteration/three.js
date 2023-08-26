/* For of loop
TODO Explore it
*/

/* 
! MAP
Documentation
? Destructuring 
TODO Explore it


const first=new Map()

first.set("ankit","Ranjan")
first.set("Think School","Business Case Study ")
first.set("Soch","Understanding the society")
first.set("LLA","Jagruk")


console.log(typeof first)

for (const [one,two] of first) {
     console.log(one, ":- ",two)
}

*/
/*
 !Object is not iteralbe in for of loop
*/
const myobj={
     user:"Ankit",
     objective:"To build confidence in HTML,CSS,IN-DEPTH JAVASCRIPT,TAILWIND CSS",
     duration:"month of September"
}

console.log(myobj)

for (const [key,value]of myobj) {
     console.log(key,value)
}