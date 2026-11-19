const aprendiz = {
    nombre : "Andres",
    edad : 23,
    ficha : 3534466,
    jornada : "Mixta",
    activo : true,

    function() {
    return `Hola, ${this.nombre} de la ficha ${this.ficha}`
}
};

console.table(aprendiz);
console.table(aprendiz.nombre, aprendiz.ficha);

aprendiz.jornada = "Diurna"
aprendiz.ciudad = "Medellin"
delete aprendiz.activo
console.table(aprendiz);

console.log(aprendiz.function());

const productos = [
    { codigo: "P01", nombre: "Cuaderno", categoria: "papeleria", precio: 4500, stock: 20 },
    { codigo: "P02", nombre: "Lápiz", categoria: "papeleria", precio: 1200, stock: 0 },
    { codigo: "P03", nombre: "Borrador", categoria: "papeleria", precio: 800, stock: 35 }
];

console.table(productos);
console.log(productos[0].nombre);
console.log(productos[2].precio);

productos.push({ codigo: "P04", nombre: "Regla", precio: 2000, stock: 10 });
console.table(productos);

let buscado = prompt("Código del producto:") ?? "";
let encontrado = null;

for (const p of productos) {
    if (p.codigo === buscado.toUpperCase()) {
        encontrado = p;
        break;
    }
}

if (encontrado) {
    console.log(`${encontrado.nombre}: $${encontrado.precio}`);
} else {
    console.log("No existe ese código");
}

let contador = 0
let suma = 0

for (const p of productos){
    if (p.stock === 0){
        contador++

        suma = suma + (productos.precio*productos.stock)
    }
}

console.log(`La cantidad de producto sin stock es: ${contador}`)
console.log(`El total del inventario es: $${suma}`)