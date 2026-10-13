console.log("\n")
const nombre = "Ana";
let edad = 17;
let estatura = 1.68;
let esAprendiz = true;
let apodo;

console.log(typeof nombre, typeof edad, typeof estatura, typeof esAprendiz, typeof apodo);

console.log("\n")
console.log(7 / 2); //3.5
console.log(7 % 2); //1
console.log(2 ** 3); //8
console.log(10 + 3 * 2); //16
console.log((10 + 3) * 2); //26
console.log(0.1 + 0.2); //0.3

console.log("\n")
console.log(typeof ("5" + 5 + 5)); //555
console.log(typeof (5 + 5 + "5")); //105
console.log(typeof ("5" + "5")); //55
console.log(typeof (5 + 5)); //10
console.log(typeof ("5" - 3)); //2
console.log(typeof ("darley" * 5)); //25
console.log(typeof (5 * "5")); //25
console.log(typeof (5 == "5")); //true
console.log(typeof (5 === "5")); //false

// console.log("\n")
// let nombre1 = prompt("Digite su nombre: ")
// let entrada = prompt("Ingrese su edad: ")

// let edad1 = Number(entrada)

// if (entrada === null || entrada.trim() === "" || Number.isNaN(edad1)) {
//     console.log(`${entrada} no es un número. Por favor ingrese un número`)
// } else {
//     console.log(`El aprendiz ${nombre1} tiene ${edad1} años y el próximo año tendrá ${edad1 + 1} años`)
// }

console.log("\n")
let nota1 = Number(prompt("Ingrese la nota #1: "))
let nota2 = Number(prompt("Ingrese la nota #2: "))
let nota3 = Number(prompt("Ingrese la nota #3: "))

let promedio = (nota1 + nota2 + nota3)/3
console.log(`Tu promedio es ${promedio.toFixed(2)}`);
