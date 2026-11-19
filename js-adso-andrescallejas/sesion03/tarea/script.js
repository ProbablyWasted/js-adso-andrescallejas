/*! UTILIDAD */
function leerNumero(mensaje) {
    const entrada = prompt(mensaje);
  if (entrada === null) return NaN; // el usuario canceló
    const texto = entrada.trim().replace(",", ".");
    return texto === "" ? NaN : Number(texto);
}

/*! AÑO BISISESTO */
function anioBisiesto() {
    const anio = leerNumero("Ejercicio 1 - Año bisiesto\nEscribe un año:");

    if (!Number.isInteger(anio)) {
    alert("El año debe ser un número entero.");
    return;
    }

    const esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
    const mensaje = esBisiesto
    ? `El año ${anio} SÍ es bisiesto`
    : `El año ${anio} NO es bisiesto`;

    console.log(mensaje);
    alert(mensaje);
}

/*! CALCULADORA */
function calculadora() {
    const a = leerNumero("Ejercicio 2 - Calculadora\nPrimer número:");
    const b = leerNumero("Segundo número:");

    if (isNaN(a) || isNaN(b)) {
    alert("Debes escribir dos números válidos.");
    return;
    }

  const entrada = prompt("Operación (+, -, *, /):");
    const operacion = entrada === null ? "" : entrada.trim();
    let resultado;

    switch (operacion) {
    case "+":
        resultado = a + b;
        break;
    case "-":
        resultado = a - b;
        break;
    case "*":
      resultado = a * b;
        break;
    case "/":
        if (b === 0) {
        alert("No se puede dividir entre cero.");
        return;
        }
        resultado = a / b;
        break;
    default:
      alert("La operación no existe. Usa +, -, * o /.");
        return;
    }

    const mensaje = `${a} ${operacion} ${b} = ${resultado}`;
    console.log(mensaje);
    alert(mensaje);
}

/*! IMC */
function calcularIMC() {
    const peso = leerNumero("Ejercicio 3 - IMC\nPeso en kg:");
    const estatura = leerNumero("Estatura en metros (ej. 1.75):");

    if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
    alert("Peso y estatura deben ser números mayores que cero.");
    return;
    }

  const imc = Number((peso / estatura ** 2).toFixed(1));
    let categoria;

    if (imc < 18.5) {
    categoria = "Bajo peso";
    } else if (imc <= 24.9) {
    categoria = "Normal";
    } else if (imc <= 29.9) {
    categoria = "Sobrepeso";
    } else {
    categoria = "Obesidad";
    }

    const mensaje = `IMC: ${imc.toFixed(1)} → ${categoria}`;
    console.log(mensaje);
    alert(mensaje);
}

/* EJERCICIOS */
anioBisiesto();
calculadora();
calcularIMC();