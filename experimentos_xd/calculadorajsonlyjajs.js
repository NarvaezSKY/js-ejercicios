let condicion = true
while (condicion=true){
    alert("Calculodora del Papu");
    let op = parseInt(prompt("1. Sumamelo, 2. Restamelo, 3. Multiplicapapu, 4. Dividemelo, 5. Sorpresa!"));
    if (op == 1) {
        let num1 = parseInt(prompt("Ingrese el numero 1"));
        let num2 = parseInt(prompt("Ingrese el numero 2"))
        alert("el resultado es" + " " + (num1 + num2));


    } else if (op == 2) {
        let num1 = parseInt(prompt("Ingrese el numero 1"));
        let num2 = parseInt(prompt("Ingrese el numero 2"))
        alert("el resultado es" + " " + (num1 - num2));

    } else if (op == 3) {
        let num1 = parseInt(prompt("Ingrese el numero 1"));
        let num2 = parseInt(prompt("Ingrese el numero 2"))
        alert("el resultado es" + " " + (num1 * num2));

    } else if (op == 4) {
        let num1 = parseInt(prompt("Ingrese el numero 1"));
        let num2 = parseInt(prompt("Ingrese el numero 2"))
        alert("el resultado es" + " " + (num1 / num2));
        let continuar = parseInt(prompt("¿continuar? 1. Si 2. No"));

    } else if (op == 5) {
        alert("5 por el culo te la inco jaskdjaksdj");

    } else {
        condicion=false
        alert("bye");
    }
}