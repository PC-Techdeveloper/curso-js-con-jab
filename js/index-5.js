//EVENTOS DE TECLADO:

/*
keydown <- Se ejecuta cuando se presiona una tecla en el teclado.
keyup <- Se ejecuta cuando suelta una tecla en el teclado.
keypress <- Se ejecuta cuando se presiona una tecla en el teclado.
*/

//Utilidad del keypress
// keyCode <- Obtiene el código de la tecla pulsada.
// key <- Obtiene el nombre de la tecla pulsada.

window.addEventListener('keypress', teclado);

//Valores del objeto del evento <- tecla pulsada (key)
// preventDefault() -> Anula la acción por defecto del evento.

function teclado(e) {
  //Como saber el nombre de una tecla (key)
  console.log('>>' + e.keyCode);
  e.key === 'ArrowUp' && e.type === 'keydown' ? (document.querySelector('.campo').style.backgroundColor = 'red') : (document.querySelector('.campo').style.backgroundColor = null);
}
