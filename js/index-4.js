// Función de declaración
const MI_NOMBRE = 'Jab';
const IVA = 0.21;
let cantidad = 2;
let precio = 4;

// LOS EVENTOS Y SUS MÉTODOS PARA UTILIZARLOS:
//¿Quién va dirigido la orden?
//¿Qué evento se va a ejecutar?
//Función que se va a ejecutar

document.querySelector('.boton1').onclick = saludar;
document.querySelector('.boton2').addEventListener('click', calcularIva);

function saludar() {
  escribir(`Hola ${MI_NOMBRE}`);
  document.querySelector('.caja').innerHTML += `<button class="boton3">Aceptar</button>`;
  document.querySelector('.boton3').onclick = saludar;
}

//Enviar valores a una función <- Parámetros
function calcularIva() {
  escribir(precio * cantidad * IVA);
}

function escribir(valor) {
  document.querySelector('.caja').innerHTML += `<div>${valor}</div>`;
}
