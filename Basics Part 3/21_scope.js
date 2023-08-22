console.log("          ");
/*
 ? In this lecture learn about Gobal scope and local scope

 We take deep dive more var,const and let
 Why developer not prefer to use var
 */

// Nested Scope

function one() {
  username = "Ankit Ranjan";
  let role;

  function two() {
    role = "Full Stack develpoer";
    console.log(username);
  }

  console.log(role);
  two();
  console.log(role);
}

// one()

// Doing same thing in if else

if (true) {
  const username = "Ankit Ranjan";

  if (username === "Ankit Ranjan") {
    let learning = "HTML, CSS, Tailwind and indepth Javascript";
    //     console.log(username);
  }

  //   console.log(learning);
}

/* 
? Here we learn about something intresting 

function output will about the return value or undefined
it will print the console as well but with undefined if there is no return

! And if we write anything after return then no code will execute

? We learn about this error where in future we learn about Concept of Hoisting

ReferenceError: Cannot access 'four' before initialization
*/
console.log(three(2));
function three(num) {
   return num + 2; 
}


console.log(four(4));
const four = function (num) {
  return num + 1;
};


console.log("            ");
