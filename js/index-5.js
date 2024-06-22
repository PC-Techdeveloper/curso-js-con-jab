//EVENTOS DE TECLADO:

/*
keydown <- Se ejecuta cuando se presiona una tecla en el teclado.
keyup <- Se ejecuta cuando se deja de presionar una tecla en el teclado.
keypress <- Se ejecuta cuando se presiona una tecla en el teclado.
*/
document.querySelector('.campo').addEventListener('keydown', escribir);

//Valores del objeto del evento <- tecla pulsada (key) 🟨
function escribir(e) {
  console.log(e.key);
}
