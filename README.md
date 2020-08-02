# pagina_oye
OYE es un sitio para escuchar música gratis - solo se diseña interfaz gràfica con Html5 CSS Bootstrap y Js

Desarrollo del sitio: OYE
¡Excelente noticia has decidido certificarte como desarrollador Front End! A
continuación te ofrecemos un reto que te invita a practicar todo lo aprendido de los
módulos HTML, CSS, JavaScript y Bootstrap.
OYE es un sitio para escuchar música gratis. Su creador desea que se pueda
compartir música entre todos los que quieran pasar un rato ameno, escuchando
sus canciones favoritas. Él ha pensado en ti como la persona ideal para diseñar
este sitio Web, que busca deleitar a los amantes de la buena música. A
continuación encontrarás los detalles que debes tomar en cuenta para
implementar a OYE.
El sitio incluye cuatro (4) páginas, las cuales describimos seguidamente:
1. Inicio: proporciona una breve bienvenida a OYE y despliega las tres
canciones más reproducidas.
2. Canciones: despliega la canciones alojadas en el sitio. Para comodidad del
usuario hay una herramienta de búsqueda, que se puede emplear para
encontrar su música favorita.
3. Registro: el usuario debe registrarse para obtener una experiencia musical
personalizada: sugerencias de nuevas canciones, que es una de las
características del sitio que se desarrollará en un futuro cercano, pero no en
este proyecto.
4. Inicio de Sesión: todos aquellos que desean obtener una interacción
musical a su medida deben Iniciar Sesión, para aprovechar esta
característica de OYE que revolucionará el mundo musical en poco tiempo.
Requerimientos
Una serie de reuniones iniciales con el creador del sitio y su equipo de asesores
arrojó la siguiente lista de requerimientos, que deseamos que cubras a través de
este desarrollo:
1. Implementa las páginas antes mencionadas
usando HTML, CSS, JavaScript y Bootstrap:
o Inicio
o Canciones
o Registro
o Inicio de Sesión
2. Implementa un botón de Contacto en la barra de navegación, que
despliega una ventana modal de Bootstrap con la información.
3. Emplea el diseño responsive (diseño adaptativo) para adaptar el sitio a
resoluciones de escritorio, tabletas y dispositivos móviles.
4. Usa al menos dos tipografías. Se sugiere una para los títulos y otra para
el resto de los textos.
5. Crea un Bootstrap personalizado con los colores de tu preferencia,
fuentes y otros ajustes de acuerdo a la interfaz que se desea construir.
6. Aplica colores de fondo y bordes cuando aplique.
7. Valida los campos de los formularios del sitio usando Javascript.
A continuación te proporcionamos más detalles del desarrollo y del uso de las
tecnología requeridas para poder complacer al creador de OYE.
Proyecto Base
Hemos desarrollado un proyecto base a partir del cual puedes comenzar a armar
al sitio. Haremos referencia este recurso en las próximas secciones.
Diseño General de la Páginas
Cada página tendrá las siguientes partes:
1. Encabezado: donde se muestra el título y el logo.
2. Menú: enlaza las cuatro páginas (Inicio, Canciones, Inicio de Sesión y
Registro), resaltando la página actual.
3. Botón de Contacto: incluye la información para contactar a OYE.
4. Pie de página: incluye los siguientes textos: “Comparte la
música” y “@Derechos Reservados”.
Recuerda usar las etiquetas HTML correspondiente y que semánticamente van
acorde al contenido que se soporta, por ejemplo, emplea la
etiqueta <header> para el encabezado.
De la misma manera usa Bootstrap para construir los componentes de interfaz
como: botones, menú, formularios.
Accediendo las Canciones del Sitio
Las canciones que se muestran en el sitio son dinámicas y se cargan vía
AJAX hacia un archivo JSON con la siguiente estructura.
{
"canciones": [
{
"nombre": "vive",
"ruta": "uno.mp3",
"reproducciones": 10,
"icono": 4
},
{
"nombre": "invierno",
"ruta": "dos.mp3",
"reproducciones": 30,
"icono": 1
}
]
}
Entonces en tu misión debes cargar este archivo JSON y desplegar la
información de manera adecuada en tu página modificando el DOM
dinámicamente.
Puedes conseguir un ejemplo de archivo de datos JSON en el proyecto base,
que hemos preparado para este reto. Además, Te animamos a incrementar el
repositorio de música de OYE agregando tus propios audios en tu archivo de
datos personales.
Reproducción de las Canciones
El usuario ávido de escuchar las canciones alojadas en el sitio, debe tener a su
disposición los controles de reproducción:
• escuchar
• detener
• manejar volumen
Ten en cuenta la etiqueta HTML para lograr esto.
Imágenes y Logo
Se sugiere que el logo tenga un tamaño de al menos 50x50 pixeles. Las
imágenes por su parte pueden tener un tamaño de alrededor de 500x330 pixeles.
Página de Inicio
En la página de Inicio se muestra un área de bienvenida, la cual puedes
customizar libremente, colocando el texto que desees y cualquier imagen (ver las
sugerencias de los tamaños de imágenes dadas anteriormente) alusiva
a OYE, que estará rotando por medio de un carrusel
automáticamente. Esta bienvenida debe estar centrada como se muestra en el
video a continuación. Recuerda que dispones de las opciones de Bootstrap y
las etiquetas de HTML para lograr una apariencia que cumpla con los
requerimientos antes expuestos.
En esta página también se muestra las “top” 3 de las canciones con mas
reproducciones del sitio. Recuerda que las canciones se cargan de forma
dinámica como explicamos con anterioridad. Y debes desarrollar un código en
JavaScript para filtrar las canciones en función del número de reproducciones, y
así obtener las tres canciones más reproducidas que se muestran a nuestros
usuarios del sitio.
El usuario debe poder controlar la reproducción de las canciones como se muestra
en el video anterior según lo explicamos en las sección Reproducción de las
Canciones.
Página de Canciones
La página de Canciones es accesible desde el menú e incluye una lista de las
canciones alojadas en el sitio. Este cuenta con una herramienta de búsqueda,
que el usuario puede usar para obtener las canciones que desea más
rápidamente. El filtro de canciones se activa con cada letra ingresada o borrada
en la barra de búsqueda. Este filtro lo debes implementar usando Javascript de
manera de seleccionar según el nombre de la canción y mostrar dinámicamente
las canciones según el texto ingresado en la caja de búsqueda. El texto
es insensible a las mayúsculas y minúsculas y no existe la
autocompletación.
Botón de Contacto
Se tiene un botón de Contacto en el menú, que debe abrir una ventana
modal con los datos del contacto. La modal debes implementarla usando
Bootstrap y debe lucir apropiadamente en todos los tamaños: Escritorio,
Tableta y Móvil.
Página de Inicio de Sesión
La página de Inicio de Sesión permite que un usuario registrado ingrese al sitio
para obtener una experiencia musical a su medida. El usuario debe ingresar
usando su email y clave secreta.
Los campos obligatorios deben validarse, generando los mensajes
correspondientes cuando la validación falle, a través del uso de JavaScript.
Las validaciones son:
1. El correo electrónico debe tener formato de correo conteniendo un @ y un
dominio.
2. Debes usar una expresión regular para validar este correo.
3. La contraseña debe tener más de 8 caracteres.
Página de Registro
La página de Registro permite que un usuario se registre en el
sitio proporcionando su email y contraseña y aceptando los Términos de
Uso. Valida que se trata de una dirección de correo de acuerdo al formato.
Adicionalmente, se deben validar que estén todos los campos obligatorios
y mostrar mensajes de error con JavaScript cuando falle la validación.
Las validaciones son:
1. El correo electrónico debe tener formato de correo conteniendo un @ y un
dominio.
2. Debes usar una expresión regular para validar este correo.
3. La contraseña debe tener más de 8 caracteres.
4. La contraseña y confirmación deben coincidir.
5. Se debe especificar un género musical favorito.
6. Se debe especificar un rango de edad.
7. Se deben aceptar los Términos de Uso.
Recuerda usar las etiquetas HTML correspondiente y cuidar el aspecto estético
acorde con toda tu interfaz.
