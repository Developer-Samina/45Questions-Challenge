// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
//  countries name's
var countries = [
    "United States",
    "Canada",
    "Germany",
    "Japan",
    "Australia",
    "Brazil",
    "Pakistan",
    "India",
    "France",
    "Mexico",
];
// Print the list of countries
console.log("List of Countries:");
countries.forEach(function (country, index) { return console.log("".concat(index + 1, ". ").concat(country)); });
