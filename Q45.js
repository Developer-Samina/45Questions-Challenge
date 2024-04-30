"use strict";
// 45. Cars: Write a   function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// Record ka matlab ye he ke hammara jo bhi string ya number ya symbole ho in ko extand kar do.
function creatCar(manufactur, model, opional) {
    return {
        manufactur,
        model,
        // 3 opional string concider out karenge
        ...opional
    };
}
const myCar = creatCar("Honda", "Civic", { color: "Black", year: "2024" });
console.log(myCar);
