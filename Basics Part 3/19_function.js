console.log("          ");

/* 
1. message => reference
  message()  => execution of code

 2. let second=message() 
    Intresting thing is even we don't call second as console.log(second)
    the console message will print but return message will not.

3. let second=message 
   console.log(second)

   output => [Function: message] reference

4. let second=message()
   console.log(second)

   output => Hi 👋 , Ankit console message will print.
            undefined  in case of no return message

5. Parameters => placehoder and argument => actual value

6.   return `Its all about choices `
     console.log("Hi 👋 , Ankit")

     if we write anything after return it will not executed

  console.log() is just for printing stuff
*/

function message() {
  console.log("Hi 👋 , Ankit");
  return `Its all about choices `;
}

// let second=message()
// console.log(second)

/* if username is empty then undefined will come as output 

username === undefined written as !username
*/

function userId(username) {
  if (!username) {
    console.log("Please enter username");
    return
  }
  return ` Hi 👋 ${username} you logged in `;
}

console.log(userId());

console.log("       ");
