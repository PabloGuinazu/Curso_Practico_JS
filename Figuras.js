//codigo del cuadrado
console.group("Cuadrados");
 /* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden : "+ladoCuadrado+"cm"); */

function perimetroCuadrado(lado) {
    return lado*4;
}

// console.log("El perimetro del cuadrado es  : "+perimetroCuadrado+"cm");

// const AreaCuadrado = ladoCuadrado*ladoCuadrado;
function AreaCuadrado(lado) {
    return lado*lado;
}
// console.log("El area del cuadrado es  : "+AreaCuadrado+"cm^2");
console.groupEnd();

//codigo del Triangulo
console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del Triangulo miden : "+ladoTriangulo1+"cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

// const alturaTriangulo = 5.5;

// console.log("La altura del triangulo es de : "+alturaTriangulo);

function perimetroTriangulo(lado1, lado2, base) {
return lado1 +lado2 +base;
} 


// console.log("El perimetro del triangulo es  : "+perimetroTriangulo +"cm");

//  const areaTriangulo =(baseTriangulo*alturaTriangulo)/2;
 function areaTriangulo(base, altura) {
    return base * altura /2;
    } 
// console.log("El area del triangulo es  : "+areaTriangulo +"cm^2");

console.groupEnd();


//Código del Circulo
console.group("Circulos");


//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es  : "+radioCirculo+"cm");


//Diametro
function diametroCirculo(radio){
    return radio *2;
}

// const diametroCirculo = radioCirculo*2;
// console.log("El diametro del circulo es  : "+diametroCirculo+"cm");


//PI
const PI = Math.PI;
console.log("PI es  : "+PI);

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del circulo es  : "+perimetroCirculo+"cm");


//Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El area del circulo es  : "+areaCirculo+"cm^2");

function areaCirculo(radio){
    return (radio * radio) * PI;
}


console.groupEnd();

//interactuamos html
function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}


function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    const area = AreaCuadrado(value)
    alert(area)
}