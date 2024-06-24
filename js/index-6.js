//TODO SOBRE LOS INPUTS <- Lo que ha escrito el usuario en el teclado

let nombre;
document.querySelector('.boton').addEventListener('click', leer);
document.querySelector('#campo').addEventListener('keydown', teclado);
limpiar();

// Dectectando la tecla "ENTER"
function teclado(e) {
  e.key === 'Enter' && leer();
}

// .value <- Obtiene el valor del input (<input> <textarea> <select>)
// innerHTML <- Escribir contenido HTML en el documento web
// Number() <- Función para convertir texto a número, sino devuelve NaN
// Comprobar si hay contenido <- Si el usuario a escrito en el <input>

/*
toUpperCase <- Convierte el texto a mayúscula
toLowerCase <- Convierte el texto a minúscula
substr <- Índice inicial y el número de caracteres para dividir
substring <- Índice inicial y final, pero no incluye el carácter en el índice final.
*/

function leer() {
  nombre = document.querySelector('#campo').value.trim().toUpperCase();
  nombre && (document.querySelector('.caja').innerHTML = `Hola ${nombre}`);
  limpiar();
}

//Vaciar el contenido de un input
//El método trim elimina los espacios innecesarios (antes y después)
function limpiar() {
  const ELEMENTO = document.querySelector('#campo');
  ELEMENTO.value = '';
  //focus <- Este el cursor en su interior de la caja
  ELEMENTO.focus();
}
