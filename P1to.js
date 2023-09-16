// / problem two is starting from here so focus on it
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var names = ["Sir Naveed", "siR ZiA"];
// In lowercase :
let lowerName = names.map(val => val.toLowerCase());
console.log(lowerName);
//  In uppercase
let upperName = names.map(val => val.toUpperCase());
console.log(upperName);
var advice = [
    {
        Author: "THe excess of everthing is bad",
        quote: "Eric ",
    },
    {
        quote: "all work and no play makes a jack dull boy",
        Author: "Muhammad amir khan",
    },
    {
        quote: "Carpe Diem.",
        Author: "Horace",
    },
    {
        quote: "Hakuna Matata",
        Author: " Timon and Pumbaa"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        Author: "Oscar Wilde",
    }
];
let famAuthor = advice.find(auth => auth.Author === 'Muhammad amir khan');
console.log(famAuthor);
export {};
