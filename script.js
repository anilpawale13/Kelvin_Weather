
const kelvin =293;
//Temprature in kelvin,variable named kelvin,

const celsius=kelvin - 273;
//Celsius is similar to Kelvin , converting kelvin to celsius

let fahrenheit = celsius * (9/5) + 32;
//converting Celsius to fahrenheit


fahrenheit= Math.floor(fahrenheit);
//floor() method from the built-in Math object to round down

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


let newton = celsius * (33/100);

 newton=Math.floor(newton);

console.log(`the temprature is ${newton} degree newton`);

