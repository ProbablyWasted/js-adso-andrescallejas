//! Caja de herramientas de conversión

//? Función Pesos => Dolares
function divisas(){
    let pesos = Number(prompt("Digite cuantos pesos colombianos tiene: "))
    let dolares = Number(prompt("Ingrese el valor actual del dolar: "))
    return `$${pesos} pesos equivale a $${pesos / dolares} dolares.`
}

//? Función: °C => °F
function temperatura(){
    let centigrados = Number(prompt("Digite la temperatura en celcius: "))
    return `${centigrados} °C equivalen a ${centigrados * 9 / 5 + 32} °F`
}

//? Función: Km => Millas
function distancia(){
    let km = Number(prompt("Digite la distancía en kilometros: "))
    return `${km} kilometros equivalen a ${km * 0.621371} millas.`
}

//? Función: Segúndos => Horas
function tiempo(){
    let segundos = Number(prompt("Ingrese el tiempo en segundos: "))
    return `${segundos} segundos equivalen a ${segundos / 3600} hora[s]`
}

let opc = prompt("Menú: \n1. Pesos => Dolares \n2. °C => °F \n3. Km => Millas \n4. Segúndos => Horas \n0. Salir.")
while(opc != 0){
    switch(opc){
        case "1":
            alert(divisas())
            console.log(divisas())
            break
        case "2":
            alert(temperatura())
            console.log(temperatura())
            break
        case "3":
            alert(distancia())
            console.log(distancia())
            break
        case "4":
            alert(tiempo())
            console.log(tiempo())
            break
        default:
            alert("Debes elegír una opción entre 0 y 4: ")
            console.log("Debes elegír una opción entre 0 y 4: ")
    }
    opc = prompt("Menú: \n1. Pesos => Dolares \n2. °C => °F \n3. Km => Millas \n4. Segúndos => Horas \n0. Salir.")
}