// 45. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


function createCar(manufacturer: string, model: string, ...options: { [key: string]: any }[]): object {
    const car: { manufacturer: string; model: string; [key: string]: any } = {
      manufacturer,
      model,
    };
  

    options.forEach((option) => {
      const [key, value] = Object.entries(option)[0];
      car[key] = value;
    });
  
    return car;
  }
  

  const carInfo = createCar("Toyota", "Camry", { color: "Blue" }, { year: 2022 });
  

  console.log("Car Information:");
  console.log(carInfo);