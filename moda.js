const lista1=[
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
]

const lista1Count ={};

lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento]  +=1; //suma la cantidad de veces que se repite
        }else{
        lista1Count[elemento]= 1;// lo agrega si es la 1ra vez que aparece 

        }
    }
);

    const lista1Array = Object.entries(lista1Count).sort( //el array se convierte en objeto
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1]; 
        }
    );
    
    const moda = lista1Array[lista1Array.length - 1];