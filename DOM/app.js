document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector(".formulario");
    var boton = form.querySelector(".boton");
  
    boton.addEventListener("click", function(event) {
      event.preventDefault();
      alert("¡Hola! Has hecho clic en el botón de ingresar.");
    });
  });