let celsius = Number(prompt("Ingresa la temperatura en grados Celsius: "));

let fahrenheit = (celsius * 1.8) + 32;
let kelvin = celsius + 273.15;

if(isNaN(celsius)){
    console.log(`El tipo de dato no es numerico`);
}else{
    console.log(`${celsius} grados Celsius son ${fahrenheit} grados Fahrenheit`);
    console.log(`${celsius} grados Celsius son ${kelvin} grados Kelvin`);
}
