// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guest_List = ["Aisha", "usama", "tayyab", "Imran", "muawiya", "Zainab"];
for (var _i = 0, guest_List_1 = guest_List; _i < guest_List_1.length; _i++) {
    var guest = guest_List_1[_i];
    console.log("Dear ".concat(guest, ",\n\tYou are cordially invited to dinner. It would be an honor to have you join us!\nSincerely, [HifzaZafar]"));
}
console.log("\nGreat news! We found a bigger dinner table!\n");
// new guests in to the list
var new_Guests = ["Ali", "Sara"];
guest_List.unshift(new_Guests[0]);
guest_List.splice(Math.floor(guest_List.length / 2), 0, new_Guests[1]);
guest_List.push("Ahmed");
// invitations to each person
for (var _a = 0, guest_List_2 = guest_List; _a < guest_List_2.length; _a++) {
    var guest = guest_List_2[_a];
    console.log("Dear ".concat(guest, ",\n\tYou are cordially invited to dinner. It would be an honor to have you join us!\nSincerely, [HifzaZafar]"));
}
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.\n");
while (guest_List.length > 2) {
    var removedGuest = guest_List.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
for (var _b = 0, guest_List_3 = guest_List; _b < guest_List_3.length; _b++) {
    var remainingGuest = guest_List_3[_b];
    console.log("Dear ".concat(remainingGuest, ",\n\tYou're still invited to dinner. We look forward to seeing you!\nSincerely, [HifzaZafar]"));
}
guest_List = [];
console.log("\nRemaining guest list:", guest_List);
