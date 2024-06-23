let nombre;
document.querySelector('.boton').addEventListener('click', leer);
document.querySelector('#campo').addEventListener('keydown', teclado);

// Dectectando la tecla "ENTER"
function teclado(e) {
  e.key === 'Enter' && leer();
}

// .value <- Obtiene el valor del input
// innerHTML <- Escribir contenido HTML en el documento web
// Number() <- Función para convertir texto a número, sino devuelve NaN
// Comprobar si hay contenido <- Si el usuario a escrito en el <input>

function leer() {
  nombre = document.querySelector('#campo').value;
  nombre && (document.querySelector('.caja').innerHTML = `Hola ${nombre}`);
}
