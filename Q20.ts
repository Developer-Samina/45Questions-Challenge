// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

//  countries name's
const countries: string[] = [
    "United States",
    "Canada",
    "Germany",
    "Japan",
    "Australia",
    "Brazil",
    "Pakistan",
    "India",
    "France",
    "Mexico", ];
  
  // Print the list of countries
  console.log("List of Countries:");
  countries.forEach((country, index) => console.log(`${index + 1}. ${country}`));