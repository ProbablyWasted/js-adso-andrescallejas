// 1. Segundos a reloj
let segundos = Number(prompt("Ingrese la cantidad de segundos:"))

if (isNaN(segundos) || segundos < 0) {
    alert("Por favor ingrese un número válido (mayor o igual a 0)")
} else {
    segundos = Math.floor(segundos)

    let horas = Math.floor(segundos / 3600)
    let minutos = Math.floor((segundos % 3600) / 60)
    let seg = segundos % 60

    console.log(`${segundos} segundos equivalen a: ${horas} h ${minutos} min ${seg} s`)
    alert(`${segundos} segundos equivalen a: ${horas} h ${minutos} min ${seg} s`)
}

// 2. Temperatura °C a °F
console.log("\n")
let celsius = Number(prompt("Ingrese la temperatura en grados Celsius (°C):"))

if (isNaN(celsius)) {
    alert("Por favor ingrese un número válido")
} else {
    let fahrenheit = celsius * 9 / 5 + 32

    console.log(`${celsius} °C equivalen a ${fahrenheit} °F`)
    alert(`${celsius} °C equivalen a ${fahrenheit} °F`)
}

// 3. Promedio de 3 notas
console.log("\n")
let nota1 = Number(prompt("Ingrese la primera nota:"))
let nota2 = Number(prompt("Ingrese la segunda nota:"))
let nota3 = Number(prompt("Ingrese la tercera nota:"))

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    alert("Por favor ingrese solo números en las tres notas")
} else {
    let promedio = (nota1 + nota2 + nota3) / 3

    console.log(`Notas: ${nota1}, ${nota2}, ${nota3}`)
    console.log(`El promedio es: ${promedio.toFixed(1)}`)
    alert(`El promedio es: ${promedio.toFixed(1)}`)
}