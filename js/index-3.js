//Operadores y expresiones:

//Operador de asignación <- =
// let caja = document.querySelector('.contenedor')
let numero1 = 5
let numero2 = 3
let numero3 = '5' // <- Un número string con número se convierte a number y un string con texto lo concatena. si no es ninguno, se convierte a NaN
let nombre = 'Jab'

numero1 *= 10
dibujar(numero1)
numero2 -= 2
dibujar(numero2)

function dibujar(valor) {
  // caja.innerHTML += `<div>${valor}</div>`
}

//Operadores aritméticos +, -, *, /, %, **
let resultado = numero1 - numero3
dibujar(resultado)

//Incremento y decremento
let miNumero1 = 5
// miNumero1++ // <- Incrementa en 1
// miNumero1-- // <- Decrementa en 1

let miResultadoA = ++miNumero1 + 1 // <- Incrementa al principio
let miResultadB = miNumero1++ + 1 // <- Incrementa al final

console.log(miResultadoA)
console.log(miResultadB)

//Operador de comparación en los condicionales <-  <, >, <=, >=
