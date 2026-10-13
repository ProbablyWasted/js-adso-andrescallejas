let precio = Number(prompt("Ingrese el valor del producto que desea adquirir: "))
let cantidad = Number(prompt("Ingrese cuantas unidades desea adquirir de dicho producto: "))
let descuento = Number(prompt("Ingrese el procentaje de descuento que tiene el producto, sin hacer uso del simbolo '%' y en caso de no haber descuento, ingrese '0'."))

if (isNaN(precio) || isNaN(cantidad) || isNaN(descuento)) {
    alert("Por favor ingrese solo números en todos los campos. Intente de nuevo.")
    console.log("Alguno de los datos ingresados no es un número.")
} else {
    let precio_real = precio*cantidad
    const iva = 1.19

    let precio_descuento = ((precio_real-(precio_real*(descuento/100)))*iva)

    console.log(`El valor del producto que desea adquirir es de $${precio} pesos`)
    console.log(`La cantidad de unidades que desea adquirir son: ${cantidad} `)
    console.log(`El descuento aplicado en esta compra es del: ${descuento}% `)
    console.log(`El valor total de la compra es de $${precio_real} pesos.`)
    alert(`El valor total de la compra despues de aplicar el descuento y el IVA es de $${precio_descuento} pesos.`)
}