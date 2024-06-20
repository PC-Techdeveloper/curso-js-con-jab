// CONTENIDO DINÁMICO EN JAVASCRIPT

// Tipos de comillas en JavaScript <- SINGLE, DOUBLE, BACKTICK
let name1 = 'JAB'
let name2 = 'JAB'
let name3 = `JAB`
let age = 18

let result1 = 'My name is ' + name1 + ' and my age is ' + age
let result2 = 'My name is ' + name2
let result3 = `My name is ${name3} and my age is ${age}`

console.log(result1) // My name is JAB and my age is 18
console.log(result2) // My name is JAB
console.log(result3) // My name is JAB and my age is 18

// Uso de las funciones con la interpolación de strings
let name = 'Javier'
let myAge = 18
let actual = new Date().getFullYear() // <- Date object

function calculateYearOfBirth(miEdad) {
  return actual - miEdad
}

let result4 = `My name is ${name} and my age is ${age} years old. I was born in ${calculateYearOfBirth(myAge)}`

console.log(result4) // My name is Javier and my age is 18 years old. I was born in 1994

// Contenido HTML (Contenido dinámico con JavaScript)
