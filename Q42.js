// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// showMagicians function
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// magician names
var magicianNames = ["Harry potter", "Albus Dumbledore", "Hermione", "Ron ", "Luna"];
var greatMagicians = makeGreat(magicianNames);
showMagicians(greatMagicians);
