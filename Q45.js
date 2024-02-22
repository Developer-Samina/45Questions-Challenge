// 45. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    options.forEach(function (option) {
        var _a = Object.entries(option)[0], key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
var carInfo = createCar("Toyota", "Camry", { color: "Blue" }, { year: 2022 });
console.log("Car Information:");
console.log(carInfo);
