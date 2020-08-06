function cargarCanciones() {
  console.log("Corriendo canciones...");
  $(document).ready(function () {
    //cargando los datos json
    $.ajax({
      url: "http://127.0.0.1:5500/Bootstrap/Proyecto_oye_sb/datos.json"
    }).done(function (resultado) {
      //llenando las canciones
      canciones = resultado.canciones;
      
      var html = "";
      //Se llenan las canciones en la grilla de canciones
      for (var i = 0; i < canciones.length; i++) {
        html += `
                <li id="lista">
                <h3 class="text-center">
                <img src="../img/icon_${canciones[i].icono}.svg" width="50px" height="50px">
                <audio src=".${canciones[i].ruta}" controls></audio>
                ${canciones[i].nombre}
                </h3>
                </li>          
                `
      }   	
    
    //Modifica el DOM agregando el html generado
    document.getElementById("grilla").innerHTML = html    
  });
});
}

function buscarCanciones() {
  console.log("Corriendo busqueda...");
  $(document).ready(function () {
    //cargando los datos json
    $.ajax({
      url: "http://127.0.0.1:5500/Bootstrap/Proyecto_oye_sb/datos.json"
    }).done(function (resultado) {
      //llenando las canciones
      canciones = resultado.canciones;
      
      const busqueda = document.querySelector("#busqueda");
      const boton = document.querySelector("#boton");
      const buscadas = document.querySelector("#grilla");

      const filtro = () => {
        buscadas.innerHTML = "";
        const texto = busqueda.value.toLowerCase();
        for (var i = 0; i < canciones.length; i++){
          const nombre = canciones[i].nombre.toLowerCase();
          if (nombre.indexOf(texto) !== -1) {
            buscadas.innerHTML += `
                                  <li id="lista">
                                  <h3 class="text-center">
                                  <img src="../img/icon_${canciones[i].icono}.svg" width="50px" height="50px">
                                  <audio src=".${canciones[i].ruta}" controls></audio>
                                  ${canciones[i].nombre}
                                  </h3>
                                  </li>
                                  `
          }
        }

        if (buscadas.innerHTML === "") {
          buscadas.innerHTML += `
                                <li id="lista">
                                <h2 class="text-center ">
                                Canciòn no encontrada
                                </h2>
                                `
        }
      }
    
      busqueda.addEventListener("keyup", filtro);
      filtro();

    });
  });
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

cargarCanciones();
buscarCanciones();