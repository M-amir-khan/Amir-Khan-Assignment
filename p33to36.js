// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// •
var current_users = ["JOHN", "amir", "DUDE", "USMAN", "Umer"];
var new_users = ["amir", "Umer", "Imam", "Baber", "warnor"];
function UserNameAvail(Username) {
    const upercaseUser = Username.toUpperCase();
    const Upercase = current_users.map(users => users.toUpperCase());
    return !Upercase.includes(upercaseUser);
}
for (const newUsername of new_users) {
    if (UserNameAvail(newUsername)) {
        console.log(`Username '${newUsername}' is available.`);
    }
    else {
        console.log(`Username '${newUsername}' is already taken. Please choose a different one.`);
    }
}
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
const favoritePizzas = ["Pepperoni", "Margherita", "Supreme"];
for (const pizza of favoritePizzas) {
    console.log(pizza);
}
for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}
// Add a line outside the for loop to express your love for pizza
console.log("I love piza");
export {};
