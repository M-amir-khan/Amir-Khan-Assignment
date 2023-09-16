// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favNum = 7;
let message = `My king is "C Ronaldo" so my favNumber is :  "${favNum}"`;
console.log(message);
// <------------------------------------------------------------------------------------------->//
// problem number 11 is starting
/* Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.*/
// Array
let clasMates = ["amir k  ", "Tufail  ", "Hassan  ", "Abdul Hameed ", "Saif"];
for (let index = 0; index < clasMates.length; index++) {
    console.log(clasMates[index]);
}
// <--------------------------------------------------------------------------------------------------------------->//
// project no 12 is starting form here
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// message is
const letter = "'You are lucky that you are selected'";
//    condition
for (const clasMate of clasMates) {
    console.log(`${clasMate}:  ! ${letter} `);
}
// for line break
console.log();
// <------------------------------------------------------------------------------------------------------------->//
//   problem no 13 is starting from here
/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/
let modefTravels = ["Suzki offRoad", "Train", "By Aeroplane", "By car",];
const singnal1 = "My faviroute bike Mode of ";
const signal2 = "Secondldy i want to travlel by ";
const singnal3 = "Most interesting is to travel by  ";
const singnal4 = "And last i want to travel by  ";
for (const modefTravel of modefTravels) {
    if (modefTravel === "Suzki offRoad") {
        console.log(`${singnal1}:: "${modefTravel}"`);
    }
    else if (modefTravel === "Train") {
        console.log(`${signal2}:: "${modefTravel}"`);
    }
    else if (modefTravel === "By Aeroplane") {
        console.log(`${singnal3}:: "${modefTravel}"`);
    }
    else if (modefTravel === "By car") {
        console.log(`${singnal4} ::"${modefTravel}"`);
    }
}
console.log();
//  <-------------------------------------------------------------------------------------------------------->// 
/* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
var Guests = ["Mamu", "Unckle", "Cousions", "Arsaln", "Ant", "Saeed", "Junaid"];
const invite = "With Greeting Your are invited to the Dinner";
for (const Guest of Guests) {
    if (Guest === "Mamu") {
        console.log(`${Guest} ::${invite}`);
    }
    else if (Guest === "Unckle") {
        console.log(`${Guest} ::${invite}`);
    }
    else if (Guest === "Cousions") {
        console.log(`${Guest} ::${invite}`);
    }
}
// <------------------------------------------------------------------------------------------------------------->//
//  Problem 15 is starting from here
//  Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// we change from the above the statement:
// solved
console.log();
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
var notInvite = "sorry For missing your Name form invitation list now your are invited";
for (const Guest of Guests) {
    if (Guest === "Junaid") {
        console.log(`${Guest}::${notInvite}`);
    }
    else if (Guest === "Arslan") {
        console.log(`${Guest}::${notInvite}`);
    }
    else if (Guest === "Ant") {
        console.log(`${Guest}::${notInvite}`);
    }
}
export {};
