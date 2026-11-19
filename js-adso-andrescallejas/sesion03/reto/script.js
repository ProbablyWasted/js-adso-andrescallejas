// Clasificador de notas SENA

const nombre = prompt("Nombre del aprendiz:");
const entrada = prompt("Nota del aprendiz (0.0 a 5.0):");

// Acepta coma o punto como separador decimal (ej. 4,5 o 4.5)
const texto = entrada === null ? "" : entrada.trim().replace(",", ".");
const nota = texto === "" ? NaN : Number(texto);

if (isNaN(nota)) {
    alert("La nota debe ser un número.");
} else if (nota < 0 || nota > 5) {
    alert("La nota debe estar entre 0.0 y 5.0.");
} else {
    let resultado;

    if (nota >= 4.6) {
    resultado = "Excelente";
    } else if (nota >= 4.0) {
    resultado = "Sobresaliente";
    } else if (nota >= 3.0) {
    resultado = "Aprobado";
    } else {
    resultado = "No aprobado";
    }

    console.log("Aprendiz:", nombre);
    console.log("Nota:", nota.toFixed(1));
    console.log("Resultado:", resultado);
    alert(resultado);
}