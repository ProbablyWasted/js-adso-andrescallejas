const aprendices = [
    { nombre: "Ana", nota: 4.5, jornada: "Mañana" },
    { nombre: "Luis", nota: 2.8, jornada: "Tarde" },
    { nombre: "Sofía", nota: 3.9, jornada: "Mañana" },
    { nombre: "Juan", nota: 4.8, jornada: "Noche" },
    { nombre: "María", nota: 2.5, jornada: "Tarde" },
    { nombre: "Pedro", nota: 3.4, jornada: "Noche" }
];

//! filter:

const aprobados = aprendices.filter((a) => a.nota >= 3); //* Notas mayores a 3.
console.table(aprobados);

const noche = aprendices.filter((n) => n.jornada == "Noche"); //* Cantidad de personas en la noche.
console.table(noche);

const manana = aprendices.filter((m) => m.jornada == "Mañana"); //* Cantidad de personas en la mañana.
console.log(`La jornada de la mañana tiene ${manana} personas`);

//! map:

const nombre = aprendices.map((a) => a.nombre.toUpperCase()); //* Organiza los nombres en mayusculas.
console.log(nombre);

const con_estado = aprendices.map((a) => ({
    ...a,
    estado: a.nota >= 3 ? "Aprobado" : "No Aprobado"
})); //* Condicional ternario.
console.table(con_estado);

//! find:

const juan = con_estado.find ((a) => a.nombre === "Juan")
console.log(juan)

//! Some:

console.log(aprendices.some((a) => a.nota >= 4.6));
console.log(aprendices.some((a) => a.nombre === "maria"));

//! Every:

console.log(aprendices.every((a) => a.nota >= 3));

const jornota = aprendices
    .filter((a) => a.jornada === "Mañana" && a.nota >= 3)
    .map((a) => a.nombre.toUpperCase());
console.table(jornota);

//! Reduce:

const suma = aprendices.reduce((total, a) => total + a.nota, 0);
console.log(suma)

const promedio = suma / aprendices.length
console.log(promedio)

//! Sort:

console.log([10, 9, 1, 100].sort());
console.log([10, 9, 1, 100].sort((a, b) => a - b));

//! To Sorted: crea un nuevo arreglo

const ranking = aprendices.toSorted((a, b) => b.nota- a.nota);
console.table(ranking)

const alfabetico = [...aprendices].sort((a,b) => a.nombre.localeCompare(b.nombre))
console.table(alfabetico)
console.table(alfabetico.reverse())

//! JSon

const texto = JSON.stringify(ranking, null, 2)
console.log(typeof texto)
console.log(texto)