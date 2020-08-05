var top3 = [];

function cargarDatos(){
  console.log("Corriendo...")
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

cargarDatos();