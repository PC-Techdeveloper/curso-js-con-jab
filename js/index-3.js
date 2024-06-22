//Operadores y expresiones:

//Operador de asignación <- =
let caja = document.querySelector('.contenedor')
let numero1 = 5
let numero2 = 3
let numero3 = '5' // <- Un número string con número se convierte a number y un string con texto lo concatena. si no es ninguno, se convierte a NaN
let nombre = 'Jab'

numero1 *= 10
dibujar(numero1)
numero2 -= 2
dibujar(numero2)

function dibujar(valor) {
  caja.innerHTML += `<div>${valor}</div>`
}

//Operadores aritméticos +, -, *, /, %, **
let resultado = numero1 - numero3
dibujar(resultado)

//Incremento y decremento ...
