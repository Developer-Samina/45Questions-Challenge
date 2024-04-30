"use strict";
// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// 3 time function call karne k liye 3 dot ka used karenge
// hum undefine k liye void ki command ka used karte he
function Sandwich(...items) {
    console.log("Sandwich order:");
    for (let i = 0; i < items.length; i++) {
        console.log(`${items[i]}`);
    }
}
Sandwich("Ham", "Cheese", "Lettuce", "Tomato");
Sandwich("Turkey", "cream cheese", "Mayo");
Sandwich();
