// 39:31
let user = parseInt(prompt(("Ingresa una cantidad para apostar")))
let eleccion = parseInt(prompt("ingresa una eleccion"))
let maquina = Math.floor(Math.random() * 10) + 1;
let cantidad = 5000

if (user > 0 && user <= cantidad) {

    while (cantidad > 0 && cantidad < 10000) {
        if (eleccion === maquina) {
            // user = user * 3
            ganas(user, eleccion, maquina, cantidad)
        } else {
            cantidad = cantidad - user
            pierdes(user, eleccion, maquina)
        }
    }

} else {
    alert("opcion invalida")
}

function ganas() {
    alert(maquina)
    cantidad = user * 3 + cantidad
    alert(`Elegiste ${maquina}. Acertaste, tienes ${cantidad}`)
    user = parseInt(prompt(("Ingresa una cantidad para apostar")))
    eleccion = parseInt(prompt("ingresa una eleccion"))
}

function pierdes() {
    alert(maquina)
    alert(`Pierdes. Tienes ${cantidad}`)
    user = parseInt(prompt(("Ingresa una cantidad para apostar")))
    eleccion = parseInt(prompt("ingresa una eleccion"))
}

// asd