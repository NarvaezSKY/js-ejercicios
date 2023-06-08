// 19:40
let dia = parseInt(prompt("ingrese el dia"))
if (dia > 12) {
    console.log("opcion no valida")

} else if (dia == 1) {
    console.log(`Mes: Enero. 31 dias`)
    console.log("Invierno")
    console.log("Meses invierno: Enero, Febrero, Marzo")
} else if (dia == 2) {
    console.log(`Mes: Febrero. 28 dias`)
    console.log("Invierno")
    console.log("Meses invierno: Enero, Febrero, Marzo")
} else if (dia == 3) {
    console.log(`Mes: Marzo. 31 dias`)
    console.log("Invierno")
    console.log("Meses invierno: Enero, Febrero, Marzo")
} else if (dia == 4) {
    console.log(`Mes: Abril. 30 dias`)
    console.log("primavera")
    console.log("Meses primavera: Abril y Mayo")
} else if (dia == 5) {
    console.log(`Mes: Mayo. 31 dias`)
    console.log("primavera")
    console.log("Meses primavera: Abril y Mayo")
} else if (dia == 6) {
    console.log(`Mes: Junio. 30 dias`)
    console.log("Verano")
    console.log("Meses verano: Junio, Julio y Agosto")
} else if (dia == 7) {
    console.log(`Mes: Julio. 31 dias`)
    console.log("Verano")
    console.log("Meses verano: Junio, Julio y Agosto")
} else if (dia == 8) {
    console.log(`Mes: Agosto. 31 dias`)
    console.log("Verano")
    console.log("Meses verano: Junio, Julio y Agosto")
} else if (dia == 9) {
    console.log(`Mes: Septiembre. 30 dias`)
} else if (dia == 10) {
    console.log(`Mes: Octubre. 31 dias`)
    console.log("Otoño")
    console.log("Meses otoño: Septiembre, Octubre, Noviembre y Diciembre")
} else if (dia == 11) {
    console.log(`Mes: Noviembre. 30 dias. Invierno`)
    console.log("Otoño")
    console.log("Meses otoño: Septiembre, Octubre, Noviembre y Diciembre")
} else if (dia == 12) {
    console.log(`Mes: Diciembre. 31 dias`)
    console.log("Otoño")
    console.log("Meses otoño: Septiembre, Octubre, Noviembre y Diciembre")
    console.log("Navidad")
}