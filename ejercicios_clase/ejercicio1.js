alert("factura js papáaaaaa");

let nombre = prompt("nombre cliente");

let producto1 = prompt("digite el producto 1")
let valor1 = parseInt(prompt("valor unitario"))

let producto2 = prompt("digite el producto 2")
let valor2 = parseInt(prompt("valor unitario"))

let producto3 = prompt("digite el producto 3")
let valor3 = parseInt(prompt("valor unitario"))

let producto4 = prompt("digite el producto 4")
let valor4 = parseInt(prompt("valor unitario"))
let resultado = (valor1 + valor2 + valor3 + valor4);
console.log("papumercado adso uwu");
console.log("factura de venta llamen a dios");
console.log(`${producto1}`, `${valor1}`);
console.log(`${producto2}`, `${valor2}`);
console.log(`${producto3}`, `${valor3}`);
console.log(`${producto4}`, `${valor4}`);

console.log("--------------");

console.log(`el subtotal de la factura es ${resultado}`);
console.log(`el iva de la factura es ${resultado*0.19}`);
console.log(`el descuento de la factura es ${resultado*0.10}`);
console.log(`el total a pagar, señor ${nombre} es ${resultado+resultado*0.19-resultado*0.10}`);