//  ! This keyword and Arrow function

/*  This Keyword 

1. console.log(this)
Alone, this refers to the global object. in browser
But in Node => {}

2.  print:`I am ${this.username}`, output => 'I am undefined'
    print:`I am ${shop.username}`,  output =>  ReferenceError:Cannot access 'shop' before initialization
    we will discuss about this later 

Benefits of using this
    "this" improves code reusability and maintainability by ensuring that functions work within the context of the specific instance they belong to.

console.log(this) inside the normal function and arrow function Output is different

Conclusion:- We just explored and get aware about this keyword 
as we further we learn in more detail.



*/

/* 
let shop = {
  username: "Ankit Ranjan",
  // print:`I am ${this.username}`, 
  // print:`I am ${shop.username}`, 
  // we will discuss about this later

  greet: function () {
    console.log(`I am ${this.username}`);
    console.log(this)
  },
};

// console.table([shop]);
// console.log(first.second());
// first.second()

shop.greet()
shop.username="Raushani"
shop.greet()

*/

/* 
function chai(){
     let user="Ankit"
     console.log(this)
}

chai()

// console.log(this)

let tea=() => {
     console.log("+++++++++++++++++++++++++")
     let user="pratick"
     console.log(this)
}
tea()

*/

// ! Arrow function

/* Need to discuss on this later

function multiply(num1,...num2){
  console.log(num2)
  return num1*num2
}

console.log(multiply(2,3,3));

let arr=[1,2]
let nu=[2]
console.log(arr*nu)

*/

function multiply(num1,num2){
  return num1*num2
}

const multi=()=>{

}

const add=(num1,num2)=> num1*num2

const subtract=(num1,num2)=> (num1*num2)

const details=() => ({username:"Ankit Ranjan"})

console.log(details())

/* 
Arrow function

Implicit return we dont need to write return
Explicit return we have write return

*/