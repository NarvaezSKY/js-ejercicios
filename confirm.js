alert("Bienvenido")
let inireg=parseInt(prompt("¿Que deseas hacer? 1. Iniciar Sesión 2. Registrarse"))

if (inireg==1){
let desicion = confirm("Iniciar Sesión");

if (desicion==true){

    iniciosesion()    

}
else{
    alert("adios")
}
}
// funcion que pide los parametros para iniciar
function iniciosesion(){
    let usuario=prompt("Ingresa tu username")
    let password=prompt("Ingresa tu contraseña")
    login(usuario,password)
    }

// funcion que verifica si los datos son validos
function login(usuario,password){
if (usuario=="cristian" && password=="12345" ){
alert(`Bienvenido, ${usuario}, has iniciado sesión exitosamente`)
}
else if (usuario!=="cristian"){
    alert("usuario incorrecto")
    iniciosesion()
}   
else if (password!=="12345"){
    alert("contraseña incorrecta")
    iniciosesion()
}
else{
    alert("algo salio mal, por favor, intentalo nuevamente")
    iniciosesion()
}
}


// registrarse
if (inireg==2){
    alert("Registrarse")

    let nuevousaurio=prompt("Ingresa tu nombre de usuario")
    let nuevacontraseña=prompt("Ingresa tu contraseña")

alert("Registrado satisfactoriamente, vuelve al inicio de sesión para continuar")
// registro()

    let usuario=prompt("Ingresa tu username")
    let password=prompt("Ingresa tu contraseña")
// validar_registro(nuevousaurio,nuevacontraseña)

if (usuario==nuevousaurio && password==nuevacontraseña){
    alert(`Bienvenido, ${nuevousaurio}, has iniciado sesión correctamente`)
    }
    else if (usuario!==nuevousaurio){
        alert("Su usuario es incorrecto, intente nuevamente")
        // registro()
    }
    
    else if (password!==nuevacontraseña){
        alert("Su contraseña es incorrecta, intente nuevamente")
        // registro()
    }

    else{
        alert("algo salio mal, intentelo nuevamente")
        // registro()
    }
}





// function registro(){
//     let usuario=prompt("Ingresa tu username")
//     let password=prompt("Ingresa tu contraseña")
//     validar_registro(nuevousaurio,nuevacontraseña)
    
// }


// function validar_registro(usuario,password,nuevousaurio,nuevacontraseña){
//     if (usuario==nuevousaurio && password==nuevacontraseña){
//     alert(`Bienvenido, ${nuevousaurio}, has iniciado sesión correctamente`)
//     }
//     else if (usuario!==nuevousaurio){
//         alert("Su usuario es incorrecto, intente nuevamente")
//         registro()
//     }
    
//     else if (password!==nuevacontraseña){
//         alert("Su contraseña es incorrecta, intente nuevamente")
//         registro()
//     }

//     else{
//         alert("algo salio mal, intentelo nuevamente")
//         registro()
//     }
// }





    // usuario==nuevousaurio || || password==nuevacontraseña