// ejercicio con objetos

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