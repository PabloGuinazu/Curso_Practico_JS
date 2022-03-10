// const precioOriginal=120;
// const descuento = 18;
function calcularPrecioConDescuento(Precio, Descuento){
const porcentajePrecioConDescuento =100 - Descuento;
const precioConDescuento =(Precio * porcentajePrecioConDescuento)/100;
return precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });