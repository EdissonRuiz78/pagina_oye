var top3 = [];

function cargarDatos() {
  console.log("Corriendo datos...")
  $(document).ready(function () {
    //cargando los datos json
    $.ajax({
      url: "http://127.0.0.1:5500/Bootstrap/Proyecto_oye_sb/datos.json"
    }).done(function (resultado) {
      //llenando las canciones
      canciones = resultado.canciones;
      //Ordenamos el arreglo en funcion de reproducciones
      canciones = canciones.sort(function(x,y){
        if(x.reproducciones < y.reproducciones){
          return 1;
        }
        else{
          return -1;
        }
      })

      var html = "";
      //Se llenan los valores de la canciones top 3 en el inicio
      for (var j = 0; j < 3; j++){
        html += `
                <tr>
                <td>${canciones[j].nombre}</td>
                <td class="text text-center">
                <audio src=${canciones[j].ruta} controls>
                <p>Tu navegador no implementa el elemento audio</p>
								</audio>
                </td>
                </tr>
                `
      }

    //Modifica el DOM agregando el html generado
    document.getElementById("top3").innerHTML = html  
  });
});
}

function limpiarErrores() {
  var errores = document.getElementsByClassName("error");
  for (var i = 0; i < errores.length; i++) {
    errores[i].innerHTML = "";
  }

}

function validar(formulario) {
  console.log("Corriendo validacion...");
  limpiarErrores();

  if (formulario.correo.value.trim().length == 0) {
    document.getElementById("errorCorreo").innerText = "Campo obligatorio";
    formulario.correo.focus();
    return false;
  }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.correo.value)) {
    document.getElementById("errorCorreo").innerText = "Correo no vàlido";
    formulario.email.focus();
    return false;
  }

  if (formulario.contrasena.value.trim().length == 0) {
    document.getElementById("errorContrasena").innerText = "Campo obligatorio";
    formulario.contrasena.focus();
    return false;
  }

  if (formulario.contrasena.value.trim().length < 8) {
    document.getElementById("errorContrasena").innerText = "Debe contener mas de 8 caràcteres";
    formulario.contrasena.focus();
    return false;
  }

  alert("Haz iniciado sesiòn");

}

function validarregistro(formulario) {
  console.log("Corriendo validacion formulario...");
  limpiarErrores();

  if (formulario.correo.value.trim().length == 0) {
    document.getElementById("errorCorreo").innerText = "Campo obligatorio";
    formulario.correo.focus();
    return false;
  }

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.correo.value)) {
    document.getElementById("errorCorreo").innerText = "Correo no vàlido";
    formulario.email.focus();
    return false;
  }

  if (formulario.contrasena.value.trim().length == 0) {
    document.getElementById("errorContrasena").innerText = "Campo obligatorio";
    formulario.contrasena.focus();
    return false;
  }

  if (formulario.contrasena.value.trim().length < 8) {
    document.getElementById("errorContrasena").innerText = "Debe contener mas de 8 caràcteres";
    formulario.contrasena.focus();
    return false;
  }

  if (formulario.contrasena.value != formulario.confirmacion.value) {
    document.getElementById("errorconfirmacion").innerText = "Las contraseñas no coinciden";
    formulario.confirmacion.focus();
    return false;
  }

  if (formulario.genero.value == 0) {
    document.getElementById("errorgenero").innerText = "Campo obligatorio";
    formulario.genero.focus();
    return false;
  }

  if (!document.querySelector('input[name="edad"]:checked')) {
    document.getElementById("erroredad").innerText = "Campo obligatorio";
    formulario.edad.focus();
    return false;
  }

  if (!formulario.terminos.checked) {
    document.getElementById("errorterminos").innerText = "Debe aceptar los términos y condiciones";
    formulario.terminos.focus();
    return false;
  }

  alert("Registro exitoso!");
  document.getElementById("formulario-registro").reset();

}

window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin: 'top'
});

window.sr = ScrollReveal();
sr.reveal('.container', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px'
});

window.sr = ScrollReveal();
sr.reveal('.container-fluid', {
  duration: 2000,
  origin: 'bottom',
  distance: '300px'
});

cargarDatos();