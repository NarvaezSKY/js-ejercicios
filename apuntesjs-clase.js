// let student = `Estudiantes del papu
// 1. koala
// 2. mr graso
// 3. motoparcero`;

// console.log(student);


// alert('ola\n \t sexo');

// let ciudad = "el tambo uwu"

// console.log(ciudad.includes("uwu"));
// if (ciudad.includes = true) {
//     alert("sexo?");
// }


// let nom = "cristian";
// let ape = " ñarbaes";

// alert(nom.concat(ape));




// let texto = null

// console.log(texto.trimEnd());






// let resultado;
// resultado = Math.min(9, 0, 4, 1, 10);
// alert(resultado);


// let resultados;
// resultados = Math.sqrt(25);
// alert(resultados);
// let sesion = true;
// alert(sesion ? `dale sigue` : `nonas`);


// let motoposada = {
//     nombre: "motoposada 'mototravieso",
//     direccion: "calle 69 a n#13",
//     descripcion: "no vengan aqui roban y huele a pobreza",
//     dueño: "mi pana el koala"

// }
// console.log(motoposada);

// delete motoposada.descripcion
// motoposada.sexo = "no";
// console.log(motoposada);


// let { sexo } = motoposada;
// console.log(sexo);


// let motoviajero = {
//     nombre: "armando segunda casa",
//     id: "31516546",
//     email: "myfacewhen@elpapu.edu.mx",
//     detalle: {
//         sexo: "es terrible marica",
//         moto: "no tiene jajs"
//     }
// }

// let { nombre, detalle: { sexo } } = motoviajero;

// console.log(nombre, sexo );





// let objeto1 = {
//     hola: "si",
//     hola2: "no"
// }
// let objeto2 = {
//     hola3: "si",
//     hola4: "no"
// }


// let objetofusion = {...objeto1, ...objeto2 };
// let { hola4 } = objetofusion;
// console.log(hola4);




// objeto con funcion dentro xd
// let aprendiz = {
//     nombre: "cristian",
//     imprimir: function() {
//         console.log(`mi nombre es ${this.nombre}`)

//     }

// };

// let aprendiz1 = {
//     nombre: "cristian",
//     imprimir: function(nombre) {
//         console.log(`mi nombre es ${nombre}`)

//     }

// };

// aprendiz.imprimir();





// let primerArray = [`hola`, false];
// console.log(primerArray[0], primerArray[1]);
// console.table(primerArray);



// let aprendices = [`Camilo`, `yesi`, `el papu`, `yo`];
// for (let i = 0; i < 4; i++) {
//     console.log(aprendices[i]);

// };


// let aprendiz = [];
// aprendiz1 = {
//         nombre: prompt("ingresa tu nombre"),
//         ape: prompt("ingresa tu moto")
//     },
//     aprendiz2 = {
//         nombre: prompt("ingresa tu nombre"),
//         ape: prompt("ingresa tu moto")
//     },
//     aprendiz3 = {
//         nombre: prompt("ingresa tu nombre"),
//         ape: prompt("ingresa tu moto")
//     };

// motoviajero.unshift(motoviajeronombre3)
// motoviajero.push(motoviajeronombre2)
// motoviajero.push(motoviajeronombre1)



// motoviajero.pop();
// motoviajero.shift();
// motoviajero.splice(0);












// let dias = [`camilo`, `hola`, `duro`, `yesi`];
// let numeros = [dia1, dia2, dia3, dia4] = dias;
// console.log(dias[1]);
// console.log(dia2);
// console.log(numeros[1]);





const libros = [
    { nombre: 'la iliada', precio: '20000' },
    { nombre: 'la odisea', precio: '15000' },
    { nombre: 'las aventuras de koala', precio: '¿quien pagaria por esto?' }
];


// for (let i = 0; i < libros.length; i++) { 
//     console.table(libros[i].nombre)
// };



libros.forEach(function(libreria) {
    console.log(`libro ${libreria.nombre} precio ${libreria.precio}`)
});