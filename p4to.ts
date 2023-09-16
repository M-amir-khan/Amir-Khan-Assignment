// problem no :5 is starting form here:

// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

type adduce={
    quote:string;
   Author:string;
    
}
var advice:adduce[]=[
{          
    Author:"THe excess of everthing is bad",
    quote:"Eric ",
    
},
{
    quote:"all work and no play makes a jack dull boy",
    Author:"Muhammad amir khan",
},
{
    quote:"Carpe Diem.",
    Author:"Horace",
},
{
    quote:"Hakuna Matata",
    Author:" Timon and Pumbaa"
},
{
    quote:"Be yourself; everyone else is already taken." ,
    Author:"Oscar Wilde",
}
]
  const famous_person="Muhammad amir khan";
        const favQuote=advice.find(advice =>advice.Author ===famous_person);
  let amir:string="";

    if (favQuote) {
           amir=`"${favQuote.quote}" by :${favQuote.Author} `;
    
}   else{
           amir =`Sorry, there is no quote by ${famous_person} in the list.`;
}
    console.log(amir);


// <---------------------------------------------------------------------------------------------------------->//


    // problem no 7 is starting from here

    /*Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.*/

console.log("answer" ,4+4);
console.log("answer",12-4);
console.log( "answer",16/2);
console.log("answer",2*4);

// <--------------------------------------------------------------------------------------------------------?>//
