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