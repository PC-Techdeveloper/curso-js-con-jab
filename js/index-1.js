// Variables globales <- fuera de un bloque o función
// let puede ser modificado ✅
let $secondtName = 'Juan'
$secondtName = 'Chanchito feliz'
// const no puede ser modificado ❌
const PI = 3.14
// var es una variable global (No utilizar)❌
var $myName = 'Pedro'

// Variables locales <- dentro de un bloque o función
function getName() {
  let $firstName = 'Juan'
  console.log($firstName)
}

// Arrays de objetos

let users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 35 },
]

//Acceder a un elemento del array de objetos
console.log(users[0].name)
//Modificar un elemento del array de objetos
users[0].name = 'Juan'
console.log(users[0].name)

// El valor de NaN
let a = 'Jab'
let n = 8
let resultado = a / n
console.log(resultado) // NaN

// JavaScript <- Tipado dinámico
let $firstName = 'Juan'
nombre = 56

// Controlar  el tipo de datos de una variable
console.log(typeof $firstName)
