console.log("            ");

/* 
1. Difference between them

const one=new Object() singleton
const one={} not a singleton

console.log(one)
*/

/* 2. Creating Nested Object and how to call them

    " ? "
*/

let first = {
  name: "Ankit",
  fire: {
    levelzero: {
      academics: "Commerce with Maths",
      fullstackdeveloper: {
        foundatuion: "HTML , CSS and Javascript",
        checklist_one: "Javascript",
        checklist_Two: "React JS",
        checklist_Three: "Typescript",
      },
    },

    levelone: {
      exploration: "Building Startup",
    },
  },
};

// console.log(first)

let second = first.fire.levelzero.fullstackdeveloper;

// console.log(second);

let {
  fire: {
    levelzero: { fullstackdeveloper: firstskill },
  },
} = first;

// console.log(fullstackdeveloper);
// console.log(firstskill)

/* 3. Merging two or more obj
A. like a Array.push  let obj3={obj1,obj2}
B. Object.assign
C. Spreadof operator

Difference between them
1.let third=Object.assign({},obj1,obj4)
AND
2. let third=Object.assign(obj1,obj4)

IN 1 every obj stored in empty string
But in 2 every obj stored in obj1

best practice is to use 1 case

*/

obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

obj2 = {
  a: 9,
  b: 8,
  c: 7,
};

obj4 = {
  d: 9,
  e: 8,
  f: 7,
};

// let obj3=obj1+obj2
let obj3 = { obj1, obj2 };
// let obj3=(obj1,obj4)

// console.log(obj3)
// console.log(obj1)
// console.log(obj4)

// let third=Object.assign(obj1,obj4)
let third = Object.assign({}, obj1, obj4);
// console.log(third);

// console.log(obj1)

let four = { ...obj4, ...obj1 };
// console.log(four);

/*
4.Object inside array and how to call them


Object.keys 
Object.values
intresting point is datatype of these

Object.entries 

.hasOwnProperty
*/

let five = [
  {
    name: "Raushani",
    age:"18",
    Quality:"A beautiful smile 🥰"
  },
  {
    domain: "Commerce, Maths and Full Stack",
  },
];

// console.log(five[1].domain);
let six=Object.keys(firstskill)
// console.log(Object.keys(firstskill))
// console.log(Object.values(firstskill))
// console.log(Object.values(five))

console.log(first.hasOwnProperty("fire"))

const person = {
     name: 'Alice',
     age: 30,
     occupation: 'Engineer'
   };
   
   const entries = Object.entries(person);
   console.log(entries);
   

// console.log(typeof six);
// console.log(typeof five);


console.log("                   ");
