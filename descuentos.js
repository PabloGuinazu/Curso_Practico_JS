// const precioOriginal=120;
// const descuento = 18;
function calcularPrecioConDescuento(Precio, Descuento){
const porcentajePrecioConDescuento =100 - Descuento;
const precioConDescuento =(Precio * porcentajePrecioConDescuento)/100;

return precioConDescuento;
}
function BotonDescuento(){
const inputPrice =document.getElementById("InputPrice");
const priceValue = inputPrice.value;

const inputDiscount =document.getElementById("InputDiscount");
const DiscountValue = inputDiscount.value;
const PrecioConDescuento =calcularPrecioConDescuento(priceValue, DiscountValue);

const ResultPrice = document.getElementById("ResultPrice");
ResultPrice.innerText = "Tu Precio con descuento son: $" + PrecioConDescuento;


}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });