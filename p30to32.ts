 
// problem no 23
// conditional problems 
// User
  // Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
  
  let car1 = 'subaru';
  
  console.log("Is car == 'subaru'? I predict True.")
  
  console.log(car1 == 'subaru')
  
  // • Look closely at your results, and make sure you understand why each line evaluates to True or False.
  
  // • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.



  let car: string = 'cityaspire';
  let age: number = 25;
  
  
  console.log("Is car == 'cityaspire'? I predict True.");
  console.log(car === 'cityaspire');
  
  
  console.log("Is age > 18? I predict True.");
  console.log(age > 18);
  
  // Test 3: Check if car is not equal to 'honda'
  console.log("Is car != 'honda'? I predict True.");
  console.log(car !== 'honda');
  
  // Test 4: Check if age is less than or equal to 30
  console.log("Is age <= 30? I predict True.");
  console.log(age <= 30);
  
  // Test 5: Check if car is 'ford' or 'toyota'
  console.log("Is car == 'ford' or car == 'toyota'? I predict True.");
  console.log(car === 'ford' || car === 'toyota');
  
  // Test 6: Check if age is not equal to 21 and car is 'subaru'
  console.log("Is age != 21 and car == 'subaru'? I predict True.");
  console.log(age !== 21 && car === 'subaru');


  

  

// // problem to check 
//   const myArray: number[] = [1, 2, 3, 4, 5];
//   const itemToCheck: number = 6;
  
//   if (!myArray.includes(itemToCheck)) {
//     console.log(`${itemToCheck} is not in the array.`);
//   } else {
//     console.log(`${itemToCheck} is in the array.`);
//   }
  



// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

const usernames: string[] = ["Admin", "Ali bhinder", "Hamza Khalid", "amir Khan", "Skamers", "Yasir"];
const alert1: string = "you have successfully logged in";

for (const username of usernames) {
    if (username === "Admin") {
        console.log(`Welcome admin: Would you like to see a status report?`);
    } else {
        console.log(`Hello ${username}, ${alert1}`);
    }
}


  

