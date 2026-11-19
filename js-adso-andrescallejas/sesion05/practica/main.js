//! Paso 1 · Tu primera licuadora

//? Definir la receta
function saludar(nombre) {
    console.log(`Hola, ${nombre} 👋`);
    alert(`Hola, ${nombre} 👋`);
}

//? Cocinar: llamar la función
saludar("Andres");
saludar("Dayana");
saludar("Mateo");

//! Paso 2 · Entregar el jugo: return

function area_rectangulo(base, altura) {
    return base * altura;
}

let area = area_rectangulo(5, 4);

console.log(`El área del rectangulo es: ${area}`);
alert(`El área del rectangulo es: ${area}`);

console.log(`El área del rectangulo es: ${area_rectangulo(3,8)}`);
alert(`El área del rectangulo es: ${area_rectangulo(3,8)}`);

//! Paso 2.1 · Entregar el jugo: return

function area_rectangulo1() {
    let base = Number(prompt("Digite el valor de la base: "))
    let altura = Number(prompt("Digite el valor de la altura: "))
    return base * altura;
}

console.log(`El área del rectangulo es ${area_rectangulo1()}`)
alert(`El área del rectangulo es ${area_rectangulo1()}`)

//! Paso 4 · Funciones que responden sí o no

function es_par(numero) {
    return numero % 2 === 0;
}

let n = Number(prompt("Escribe un número:"));

if (es_par(n)){
    console.log(`${n} es par`);
} else{
    console.log(`${n} es impar`);
}

//! Paso 5 · Funciones flecha y valores por defecto

//? Si no dicen la tasa, usa 19 %
function calcularIVA(precio, tasa = 0.19){
    return precio * tasa;
}
console.log(calcularIVA(10000));
console.log(calcularIVA(10000, 0.05));

//? La misma idea, más corta
const doble = (n) => n * 2;
const saludo = (nombre) => {
    return `Hola, ${nombre}`;
};
console.log(doble(21), saludo("Sofía"));

//! Paso 6 · Mejora tu clasificador

function evaluar_nota(nota){
    if(nota < 3.0){
        return `Su nota fue ${nota}\nInsuficiente, no aprobado.`
    } else if(nota < 4.1){
        return `Su nota fue ${nota}\nAceptable, aprueba.`
    } else if(nota < 4.6){
        return `Su nota fue ${nota}\nSobresaliente, abrueba con creces!`
    } else{
        return `Su nota fue ${nota}\nExcelente, victory royale!`
    }
}

console.log(evaluar_nota(4.8));
console.log(evaluar_nota(3.2));
console.log(evaluar_nota(1.5));