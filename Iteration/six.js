console.log("            ")

/* Complications With forEach
  

const first=[1,2,3,4,5,6,7,8,9,10]

let second=[]

const one=first.forEach( (num) => {
     return "hello Jarvis"
     // console.log(num>4)
     // console.log(num)
     // if (num>4) {
     //      second.push(num)
     // }

     
})

// console.log(second);
// console.log(one)
*/

/* filter 
Output comes in array



let two=first.filter( (val) =>{
     return val
})

console.log(two)

*/

/* Time for Practice*/

const books = [
     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
   ];

let third=books.filter( (bk) => (bk.publish>=1956))

console.log(third)
































console.log("            ")