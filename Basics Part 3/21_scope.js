console.log("          ")
/*
 ? In this lecture learn about Gobal scope and local scope

 We take deep dive more var,const and let
 Why developer not prefer to use var
 */

// Nested Scope

function one(){
     username="Ankit Ranjan"
     let role;

     function two(){
          role="Full Stack develpoer"
          console.log(username)
     }
     
     console.log(role)
     two()
     console.log(role)
}

one()


















console.log("            ")