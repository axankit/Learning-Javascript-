
/* 
let shop = {
     username:"Trishali",
     Price:"2999",

     thanks:function(){
          console.log(`Thanks for shopping! `)
     }
};

shop.username="Raushani"
console.log(shop.username)
*/

/* Define a constructor function for creating task lists
function TaskList(name) {
     this.name = name;
     this.tasks = [];
   
     this.addTask = function(task) {
       this.tasks.push(task);
       console.log(task + " added to " + this.name + " list.");
     };
   }
   
   // Create two task lists
   const workTasks = new TaskList("Work");
   const personalTasks = new TaskList("Personal");
   
   console.log( typeof workTasks)
   Add tasks to the lists
   workTasks.addTask("Finish report");
   personalTasks.addTask("Buy groceries");

   */


// Define a constructor function for creating task lists
function TaskList(name) {
     name = name;
     tasks = [];
   
     addTask = function(task) {
       tasks.push(task);
       console.log(task + " added to " + name + " list.");
     };
   }
   
   // Create two task lists
   const workTasks = new TaskList("Work");
   const personalTasks = new TaskList("Personal");

   console.log(typeof workTasks)
   
   // Add tasks to the lists
//    workTasks.addTask("Finish report");
//    personalTasks.addTask("Buy groceries");
   
   