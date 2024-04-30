"use strict";
// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function cityCountry(city, country) {
    return `${city}, ${country}`;
}
const result1 = cityCountry("Karachi", "Pakistan");
const result2 = cityCountry("Tokyo", "Japan");
const result3 = cityCountry("Paris", "France");
console.log(result1);
console.log(result2);
console.log(result3);
