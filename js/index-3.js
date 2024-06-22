//Operadores y expresiones:

//Operador de asignación <- =
// let caja = document.querySelector('.contenedor')
let numero1 = 5;
let numero2 = 3;
let numero3 = '5'; // <- Un número string con número se convierte a number y un string con texto lo concatena. si no es ninguno, se convierte a NaN
let nombre = 'Jab';

numero1 *= 10;
dibujar(numero1);
numero2 -= 2;
dibujar(numero2);

function dibujar(valor) {
  // caja.innerHTML += `<div>${valor}</div>`
}

//Operadores aritméticos +, -, *, /, %, **
let resultado = numero1 - numero3;
dibujar(resultado);

//Incremento y decremento
let miNumero1 = 5;
// miNumero1++ // <- Incrementa en 1
// miNumero1-- // <- Decrementa en 1

let miResultadoA = ++miNumero1 + 1; // <- Incrementa al principio
let miResultadB = miNumero1++ + 1; // <- Incrementa al final

console.log(miResultadoA);
console.log(miResultadB);

//Operadores de comparación en los condicionales <-  <, >, <=, >=, ==, ===, !=, !==
// == <- Compara el valor
// === <- Compara el tipo y el valor
// != <- Compara el valor
// !== <- Compara el tipo y el valor
// !(Negación de la comparación)
// Comparación booleana false <- 0, "", Null, Undefined, NaN
// Comparación booleana true <- 1, "1", true, "true", Object, Array, Function

let number1 = false;
let number3 = 1;
let resultado2 = number1 === number3;
console.log(!number1);

//Operadores Ternarios: (Condición) ? true : false
let firstName = 'Jacobo';
let age = 18;
let heads = 1;
let alive = false;

// Operadores Lógicos:
// Ley de precedencia <- Indica el orden de ejecución de los operadores (AND, OR)
(firstName === 'Jab' || age >= 18) && heads === 1 ? console.log('Soy Jab') : console.log('No soy Jab');

// Cuando se comparan con valores booleanos, no hace falta poner (=== true) o (=== false), es recomendable poner sin el true y en el false con operador de comparación)

!alive ? console.log('Estoy vivo') : console.log('No estoy vivo');

// Cuando son variables sin definir
let iExist = alive ? 'SI' : 'NO';
