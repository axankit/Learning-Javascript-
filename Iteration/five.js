/* for each loop*/

// Learning=["Responsive website","In-depth Javascript","Confident in React js ","Confident in Typescript","MERN Stack"]

// Learning.forEach((element,val,ae) => {
//      console.log(element,val,ae)
     
// });

let mycoding=[
     {
          language:"Python",
          learningpercentage:25
     },

     {
          language:"Javascript",
          learningpercentage:55
     },

     {
          language:"JAVA",
          learningpercentage:5
     }
]

mycoding.forEach( (item) => {
    console.log(item.language)
})