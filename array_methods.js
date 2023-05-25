// .some
let array1 =[11,2,3,4,5];
const resultado=array1.some(function(elemento){
return elemento==1;
}
)
console.log (resultado);
// dice si la condicion se cumple o no con un boleano


                                              
// .every
const num = [1, 2, 3, 4, 5];

const mayoracero = num.every(function(element) {
  return element >3 ;
});

console.log(mayoracero);
// si todos cumplen con la condicion, devuelve boleano




// .findindex
let array2 =[`manzana`, `pera`, `piña`, `pomelo`, `rabano`];
const busca = array2.findIndex(function (a) {
  return a == `rabano`
} )

console.log (busca);
// dice la posicion del valor que cumple




// .reduce
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(acumulador, elemento) {
  return acumulador + elemento;
});

console.log(sum);
// suma todos los valores del array

// .filter
const numeracos = [1, 2, 3, 4, 5];

const funcionarray = numeracos.filter(function(element) {
  return element >2
});

console.log(funcionarray);
// filtra los elementos de un array bajo una condicion y los devuleve en otro array


// .find
const numeritos = [1, 2, 3, 4, 5];

const foundNumber = numeritos.find(function(element) {
  return element > 2;
});

console.log(foundNumber);
// retorna el primer valor que cumpla con la condicion









// .concat
const arreglo1 = [1, 2, 3];
const arreglo2 = [4, 5, 6];
const arreglo3 = [7, 8, 9];

const combinedArray = arreglo2.concat(arreglo2);

console.log(combinedArray)

// devuelve un array con todos los arrays concatenados