// .some
let array1 =[1,2,3,4,5];
const resultado=array1.some((elemento)=>{
return elemento>3;
}
)
console.log (resultado);


// .findindex
let array2 =[`manzana`, `pera`, `piña`, `pomelo`, `rabano`];
const index = array2.findIndex((elemento)=>{
return elemento === `pera`
})
console.log (index);


// .reduce
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(accumulator, element) {
  return accumulator + element;
});

console.log(sum);


// .filter
const numeracos = [1, 2, 3, 4, 5];

const funcionarray = numeracos.filter(function(element) {
  return element % 2 === 0;
});

console.log(funcionarray);



// .find
const numeritos = [1, 2, 3, 4, 5];

const foundNumber = numeritos.find(function(element) {
  return element > 3;
});

console.log(foundNumber);
// retorna el primer valor que cumpla con la condicion




// .every
const num = [1, 2, 3, 4, 5];

const mayoracero = num.every(function(element) {
  return element > 0;
});

console.log(mayoracero);




// .concat
const arreglo1 = [1, 2, 3];
const arreglo2 = [4, 5, 6];
const arreglo3 = [7, 8, 9];

const combinedArray = arreglo1.concat(arreglo2, arreglo3);

console.log(combinedArray)