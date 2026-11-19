// Estadísticas del grupo: pregunta cuántas notas vas a ingresar, pídelas una por una en un ciclo (rechazando las inválidas con do...while) y muestra el promedio, la nota mayor y la nota menor.

let c_notas
let nota
let mayor = 0
let menor = 5.1
let suma = 0

do{
    c_notas = Number(prompt("Digite la cantidad de notas que desea ingresar: "))
} while(Number.isNaN(c_notas) || c_notas < 0 || Number.isInteger(c_notas) != true)

for(let i = 0; i < c_notas;i++){
    do{
        nota = Number(prompt(`Digite la nota #${i+1}: `))
    } while(Number.isNaN(nota) || nota < 0 || nota > 5)

    suma += nota

    if(nota > mayor){
        mayor = nota
    }

    if(nota < menor){
        menor = nota
    }

}

let promedio = suma/c_notas
console.log(`El promedio del estudiante es: ${promedio}\n La nota mayor es: ${mayor}\n La nota menor es: ${menor}`)
alert(`El promedio del estudiante es: ${promedio}\n La nota mayor es: ${mayor}\n La nota menor es: ${menor}`)