//funciones helpes / utils
function esPar(numero){
    return (numero % 2 === 0);
}
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
   const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }   
//Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personaMitad1 ,personaMitad2] );
    return mediana;
} else {
    const personaMitad = lista[mitad];
    return personaMitad;
    }
}

  //mediana general
const salariosChi = chile.map(
    function(persona){
        return persona.salary;
    }
);

const salariosChiSorted = salariosChi.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
    }
);
const medianaGeneralChi = medianaSalarios(salariosChiSorted);

//mediana del top 10

const spliceStart = (salariosChiSorted.length * 90) /100;
const spliceCount = salariosChiSorted.length -spliceStart;

const salariosChiTop10 = salariosChiSorted.splice(
    spliceStart,
    spliceCount,
);


const medianaTop10chi = medianaSalarios(salariosChiTop10);

console.log({
    medianaGeneralChi,
    medianaTop10chi,
});
