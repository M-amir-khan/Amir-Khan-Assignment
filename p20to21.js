// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var placetoVisit = ["Hagia Sofia Mosque", "TajMahal", "shahi qila", " Arabia", "Naran Kaghan"];
console.log(placetoVisit);
// problem no 20
//  Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var favCities = ["Makkah", "Istambol", "Lahore", "Sydney", "Barcelona", "Agra", "Islamabad", "wales"];
console.log("MY favourite city are given", favCities);
for (const favCitie of favCities) {
    console.log(favCitie);
}
//    They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Define an array of city objects
const cities = [
    {
        name: "New York",
        country: "United States",
        population: 8537673,
    },
    {
        name: "Paris",
        country: "France",
        population: 2140526,
    },
    {
        name: "Tokyo",
        country: "Japan",
        population: 13929286,
    },
    {
        name: "London",
        country: "United Kingdom",
        population: 8982256,
    },
];
// Print information about each city
console.log("Information about Cities:");
for (const city of cities) {
    console.log(`City: ${city.name}`);
    console.log(`Country: ${city.country}`);
    console.log(`Population: ${city.population}`);
    console.log("--------------------");
}
export {};
