alert("Estudiantes y notas");

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