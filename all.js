function ejercicio1(){
alert("Ejercicio 1: factura js papáaaaaa");

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
};



function ejercicio2(){

alert("Ejercicio 2 :Estudiantes y notas");

let nombre = prompt("nombre aprendiz");
let nota1 = parseFloat(prompt("nota 1"))
let nota2 = parseFloat(prompt("nota 2"))
let nota3 = parseFloat(prompt("nota 3"))

let nombre1 = prompt("nombre aprendiz 2");
let nota4 = parseFloat(prompt("nota 1"))
let nota5 = parseFloat(prompt("nota 2"))
let nota6 = parseFloat(prompt("nota 3"))

let nombre2 = prompt("nombre aprendiz 3");
let nota7 = parseFloat(prompt("nota 1"))
let nota8 = parseFloat(prompt("nota 2"))
let nota9 = parseFloat(prompt("nota 3"))

console.log("RESULTADOS ESTUDIANTES:")
console.log("--------------");

console.log(`resultado estudiante ${nombre}`)
resultado1 = (nota1 * 0.20 + nota2 * 0.20 + nota3 * 0.60);
console.log(`el resultado del estudiante ${nombre} es ${resultado1}`)
if (resultado1 > 3) {
    console.log(`el estudiante ${nombre} aprobó`);
} else if (resultado1 < 3) {
    console.log(`el estudiante ${nombre} reprobó`);
};
console.log("--------------");

console.log(`resultado estudiante ${nombre1}`)
resultado2 = (nota4 * 0.20 + nota5 * 0.20 + nota6 * 0.60);
console.log(`el resultado del estudiante ${nombre1} es ${resultado2}`)
if (resultado2 > 3) {
    console.log(`el estudiante ${nombre1} aprobó`);
} else if (resultado2 < 3) {
    console.log(`el estudiante ${nombre1} reprobó`);
};
console.log("--------------");

console.log(`resultado estudiante ${nombre2}`)
resultado3 = (nota7 * 0.20 + nota8 * 0.20 + nota9 * 0.60);
console.log(`el resultado del estudiante ${nombre2} es ${resultado3}`)
if (resultado3 > 3) {
    console.log(`el estudiante ${nombre2} aprobó`);
} else if (resultado3 < 3) {
    console.log(`el estudiante ${nombre2} reprobó`);
};
};



function ejercicio3(){
    alert("Ejercicio 3: Factura Motoviajero")
let motoviajero = {
    nombre: prompt("Nombre del Motoviajero..."),
    apellido: prompt("Apellido del Motoviajero..."),
    tipoid: prompt("TIPO IDENTIFICACION Motoviajero... "),
    nid: prompt("Ingresa tu numero de documento..."),
    nacionalidad: prompt("¿De que pais eres?"),
}
let ruta = {
    kilometros: prompt("¿Cuantos kilometros hay en la ruta?"),
    nombreruta: prompt("¿Como se llama la ruta por la que pasaste?"),
    puntopartida: prompt("¿En donde empezaste la ruta?"),
    puntollegada: prompt("¿Donde acabo la ruta?"),
    paradas: prompt("¿En donde te detuviste?"),
}
let presupuesto = {
    hospedaje: parseFloat(prompt("¿Cuanto gastaste en hospedaje?")),
    alimentacion: parseFloat(prompt("¿Cuanto gastaste en alimentacion?")),
    recreacion: parseFloat(prompt("¿Cuanto gastaste en recreacion?")),
    gasolina: parseFloat(prompt("¿Cuanto gastaste en gasolina?")),
    mantenimiento: parseFloat(prompt("¿Cuanto gastaste en mantenimiento?")),
}
let totapresupuesto = (presupuesto.hospedaje + presupuesto.alimentacion + presupuesto.recreacion + presupuesto.gasolina + presupuesto.mantenimiento);


console.log(`RESUMEN DE TU VIAJE UWU`);
console.log(`__________________________________________`);
console.log(`El motoviajero ${motoviajero.nombre} ${motoviajero.apellido} de nacionalidad ${motoviajero.nacionalidad} realizó la ruta  ${ruta.nombreruta} con las siguientes especificaciones: `);

console.log(`__________________________________________`);

console.log(`Kilometros de la ruta: ${ruta.kilometros}`)
console.log(`Partió desde: ${ruta.puntopartida}`)
console.log(`llegó a : ${ruta.puntollegada}`)
console.log(`Y se detuvo en: ${ruta.paradas}`)

console.log(`__________________________________________`);

console.log(`Gastaste $${presupuesto.hospedaje} en hospedaje. `)
console.log(`Gastaste $${presupuesto.alimentacion} en alimentacion. `)
console.log(`Gastaste $${presupuesto.recreacion} en recreacion. `)
console.log(`Gastaste $${presupuesto.gasolina} en combustible. `)
console.log(`Gastaste $${presupuesto.mantenimiento} en mantenimiento. `)
console.log(`__________________________________________`);

console.log(`El total gastado en la ruta fue: ${totapresupuesto}`);

console.log(motoviajero);
console.log(ruta);
console.log(presupuesto);
};




function ejercicio4(){
    let motoviajero = [

        motoviajeronombre = { nombre: prompt("ingresa tu nombre"), placa: prompt("ingresa tu moto"), modelo: prompt("ingresa tu placa") }, 
        motoviajeronombre = { nombre: prompt("ingresa tu nombre"), placa: prompt("ingresa tu moto"), modelo: prompt("ingresa tu placa") },
        motoviajeronombre = { nombre: prompt("ingresa tu nombre"), placa: prompt("ingresa tu moto"), modelo: prompt("ingresa tu placa") }];
        
        console.table(motoviajero);
}


const ejercicio5=()=>{
    alert("Ejercicio 5: Push y Unshift")
    let motoviajero = [];
    motoviajeronombre1 = {
            nombre: prompt("ingresa tu nombre"),
            placa: prompt("ingresa tu moto")
        },
        motoviajeronombre2 = {
            nombre: prompt("ingresa tu nombre"),
            placa: prompt("ingresa tu moto")
        },
        motoviajeronombre3 = {
            nombre: prompt("ingresa tu nombre"),
            placa: prompt("ingresa tu moto")
        };
    
    motoviajero.unshift(motoviajeronombre3)
    motoviajero.push(motoviajeronombre2)
    motoviajero.push(motoviajeronombre1)
    
    console.table(motoviajero);
}


const ejercicio6=()=>{
    moteros = [];
let numero = parseInt(prompt("ingresa el numero"))
for (let i = 0; i < numero; i++) {
    motero1 = {
        nombre: prompt("ingresa tu nombre"),
        moto: prompt("ingresa tu moto")
    }
    moteros.unshift(motero1);
};
console.table(moteros);
}



const ejercicio7=()=>{
    let nombre = prompt("Nombre");
let apellido = prompt("Apellido");
let ciudad = prompt("ciudad");

function Login() {
    console.log(`Bienvenido ${nombre} ${apellido} te vemos desde la ciudad ${ciudad}`);
};

Login(nombre,apellido,ciudad);

}
const ejercicio8=()=>{
    let numero=(prompt("numero"))

    if (numero%numero!==0){
        console.log("no es valido")
    }
    
    else{
        let i;
    
        for(i=0;i<=numero;i++){
    
            console.log(i)
    
            if(i%5==0 && i%3==0){
            console.log(`${i} ping pong`)
            continue
            }
            else if (i%3==0){
            console.log(`${i} ping`)
            continue;
            }
    
            else if (i%5==0){
            console.log(`${i} pong`)
            continue
            }
        }
    }    
}