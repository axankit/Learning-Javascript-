// !IIFE Immediately Invoked Function Expression

/* 
1. Why we need IIFE ?
2. What is IIFE
3. Syntax of IIFE in different case 
Named IIFE AND Simple IIFE

4. point to be noted when you write two IIFE in same file

5. parameters in IIFE

*/

/* 
1. 📦 Why we need IIFE ?
A. when we need to execute code instantly
B. to avoid variable pollution of Global scope


Chat GPT 
When you have code that you only need to run once and don't want to keep the variables around after.
- It's like a mini playground inside your code where you can play, but the toys don't stay around forever.

🚀 **Benefits**:
 Avoids polluting the global namespace (the playground).
 Keeps your code organized and prevents conflicts between different parts of your program.


2. 🧹What is IIFE
IIFE is a way that help to execute code instantly

Chat GPT 
It's like inviting a friend to play with their toys, but only for a short while. It helps you run code without creating a bunch of global variables that stick around and clutter your playground (or program).


3. Syntax of IIFE in different case 
Named IIFE AND Simple IIFE

4. point to be noted when you write two IIFE in same file

5. parameters in IIFE



*/

// function check (){
//      console.log("You are connected")
// }

// check()

(function check (){
     console.log("You are connected")
})();


(()=>{
     console.log("Poor connection")
})();

((name)=>{
     console.log(`Hi ${name} Keep learning and Have fun`)
     console.log("Poor connection")
})("Raushani")


