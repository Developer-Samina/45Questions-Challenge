"use strict";
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guestArr = ["sana", "safa", "hina", "nida", "hira"];
let canNoteAttend = "nida";
let newGuest = "Taha";
guestArr[guestArr.indexOf(canNoteAttend)] = newGuest;
guestArr.unshift("saba");
let middleGuest = ("tuba");
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
guestArr.push("rafa");
console.log(guestArr.length + " " + " people" + " " + "are invited to dinner");
