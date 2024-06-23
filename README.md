# Curso de JavaScript con JAB

## Variables:

Las variables son una parte fundamental de JavaScript. Las variables son identificadores que se utilizan para almacenar valores. Las variables pueden ser de cualquier tipo, como números, cadenas de texto, objetos, funciones, etc.

-- Tipos de datos en JavaScript:
JavaScript tiene varios tipos de datos, como números, cadenas de texto, objetos, funciones, etc. Cada tipo de dato tiene su propio uso y propiedades (numbers, strings, objects, functions, Null, Undefined, Booleans, Symbol, BigInt, etc.).

-- Variables globales:
Las variables globales son variables que se pueden acceder desde cualquier parte del código. Las variables globales son útiles para almacenar valores que se utilizan en varios lugares del código.

-- Variables locales:
Las variables locales son variables que se pueden acceder solo desde el ámbito en el que se crearon. Las variables locales son útiles para almacenar valores que se utilizan en un solo lugar del código.

-- Scope: Alcance de variables:
El alcance de una variable es el ámbito en el que se puede acceder a ella. El alcance de una variable se puede determinar por su ubicación en el código y su propio tipo (Global o local).

```javascript
// Variables globales -> Fuera de una función o un bloque de código
let nombre = 'Javier';
let edad = 18;

// Variables locales <- Dentro de una función
function restar() {
  let numero = 5;
  let numero2 = 3;
  return numero - numero2;
}

restar(); // 2
```

## ARRAYS DE OBJETOS:

-- Los arrays de objetos son un tipo de objeto que contiene objetos, los objetos pueden ser de cualquier tipo. Los objetos que se almacenan en un array de objetos se llaman elementos del array.

-- El valor de NaN (Not a Number): Es un valor especial que se utiliza para indicar que un valor no es numérico.

```javascript
let array = [{1, 2, 3, 4, 5}];
let array2 = [{1, 2, 3, 4, 5}];

// Push <- Agrega un elemento al final de la lista
array.push(6);
array2.push(10);

console.log(array); // [1, 2, 3, 4, 5, 6]
console.log(array2); // [1, 2, 3, 4, 5, 10]
```

## JAVASCRIPT ES UN LENGUAJE DE TIPO DE DINÁMICO:

Es un lenguaje de programación que se basa en el tipado dinámico, lo que significa que no es necesario indicar el tipo de datos de cada variable antes de utilizarla. En lugar de esto, el tipo de datos se inferencia automáticamente a partir de la información que se le proporciona al programa.

-- El valor de NaN (Not a Number): Es un valor especial que se utiliza para indicar que un valor no es numérico.

-- Controlar el tipo de datos de una variable:

```javascript
console.log(typeof $firstName);
```

## CONTENIDO DINÁMICO EN JAVASCRIPT:

-- 3 Tipos diferentes de comillas (Single, Double, Backtick)

```javascript
let name1 = 'JAB';
let name2 = 'JAB';
let name3 = `JAB`;

let age = 18;

let result = 'My name is ' + name1 + ' y mi edad es ' + age;
let result2 = 'My name is ' + name2 + ' y mi edad es ' + age;
let result3 = `My name is ${name3} y mi edad es ${age}`;
```

## USO DE LAS FUNCIONES CON LA INTERPOLACION DE STRINGS:

```javascript
let name = 'Javier';
let myAge = 18;
let actual = new Date().getFullYear(); // <- Date object

function calculateYearOfBirth(miEdad) {
  return actual - miEdad;
}

let result4 = `My name is ${name} and my age is ${age} years old. I was born in ${calculateYearOfBirth(myAge)}`;

console.log(result4); // My name is Javier and my age is 18 years old. I was born in 1994
```

# CONTENIDO HTML (Contenido dinámico con JavaScript)

-- Contenido dinámico en HTML: InnerHTML sirve para modificar el contenido de un elemento HTML.
-- querySelctor: Permite seleccionar un elemento HTML en el DOM.
-- innerHTML: Permite modificar el contenido de un elemento HTML.
-- createElement: Permite crear un nuevo elemento HTML.
-- appendChild: Permite añadir un nuevo elemento HTML a un elemento existente.

```javascript
document.querySelector('body').innerHTML = `
<div>Mi nombre es <span class="nombre">${name}</span></div>
<div>Mi edad es <span class="edad">${age}</span></div>
<img class='img' src="${imagen}" alt="Una foto de Jefferson, laborando en la COMPUTERIA">`;
```

# OPERADORES Y EXPRESIONES:

```javascript
//Operador de asignación <- =
//Operadores de asignación compuesta <- +=, -=, *=, /=, %=, **=
//Incremento y decremento .<- ++, --
//Operadores de comparación <, >, <=, >=, == (Igualdad y compará el valor), === (Extrictamente igual y compará el tipo y el valor), != (Diferente y compará el valor), !== (Extrictamente diferente y compará el tipo y el valor), !(Negación de la comparación)

let numero1 = 5;
let numero2 = 3;
console.log((numero1 += numero2));
console.log(numero1++);
console.log(numero1--);

console.log(numero1 == numero2);
console.log(numero1 === numero2);
console.log(numero1 != numero2);
console.log(numero1 !== numero2);
console.log(numero1 > numero2);
console.log(numero1 < numero2);
console.log(numero1 >= numero2);
console.log(numero1 <= numero2);
```

# OPERADORES TERNARIOS: (Condición) ? true : false

# OPERADORES LÓGICOS: &&(AND), ||(OR)

```javascript
let firstName = 'Jacobo';
let age = 18;
let heads = 1;
let alive = false;

//Operadores Lógicos: && - AND, || - OR

/*
true && true <- true
true && false <- false
false && true <- false
falsae && false <- false

true || true <- true
true || false <- true
false || true <- true
false || false <- false
*/

//Ley de precedencia <- Indica el orden de los operadores en JavaScript (AND, OR)
firstName === 'Jab' || (age >= 18 && heads === 1) ? console.log('Soy Jab') : console.log('No soy Jab');

// Cuando se comparan con valores booleanos, no hace falta poner (=== true) o (=== false), es recomendable poner sin el true y en el false con operador de comparación).

!alive ? console.log('Estoy vivo') : console.log('No estoy vivo');

// Cuando son variables sin definir
let iExist = alive ? 'SI' : 'NO';
```

# FUNCIONES Y EVENTOS:

- FUNCIONES: Las funciones permite ser reutilizables y modulares en el código, también como callbacks para llamar a funciones externas.

```javascript
const MI_NOMBRE = 'Jab';
const IVA = 0.21;
let cantidad = 2;
let precio = 4;
saludar();

// EVENTOS:

//¿Quién va dirigido la orden?
//¿Qué evento se va a ejecutar?
//Función que se va a ejecutar

document.querySelector('.boton1').onclick = saludar;
document.querySelector('.boton2').addEventListener('click', calcularIva);

function saludar() {
  console.log(valor);
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

//---------------------------------------------------------
escribir(calcularIva(cantidad * precio, cantidad, precio, IVA)); // Callback

function saludar() {
  escribir(`Hola ${MI_NOMBRE}`);
}

//Enviar valores a una función <- Parámetros
// Función con return
function calcularIva(resultado, cantidad, precio, IVA) {
  let result = resultado * IVA; // Solo devuelve un valor
  // Devuelve un objeto con dos propiedades
  let suma = cantidad + precio;
  return {
    resultado: result,
    suma: suma,
  };
}

function escribir(valor) {
  let primerValor = valor.resultado;
  let segundoValor = valor.suma;
  document.querySelector('.caja').innerHTML += `<div>${primerValor} (${segundoValor})</div>`;
}
```

# EVENTOS DE TECLADO:

```javascript
/*
keydown <- Se ejecuta cuando se presiona una tecla en el teclado.
keyup <- Se ejecuta cuando se deja de presionar una tecla en el teclado.
keypress <- Se ejecuta cuando se presiona una tecla en el teclado.
*/

//e.key <- Obtiene toda la información del evento
function escribir(e) {
  e.key === 'Enter' ? alert('Has pulsado la tecla "ENTER"') : null;
}

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
```

# TODO SOBRE LOS INPUTS:
```javascript





```



# MANEJO DEL DOM EN JAVASCRIPT

### SELECCIONAR ELEMENTOS DEL DOM:

-- MÉTODOS TRADICIONALES DEL DOM:

- getElementById(id) <- Busca el elemento HTML por su id, si no encuentra devuelve Null.
- getElementsByClassName(className) <- Busca todos los elementos con la clase `class`, si no encuentra devuelve un array vacío.
- getElementsByName(name) <- Busca elementos con el atributo `name` a `value`, si no encuentra devuelve un array vacío.
- getElementsByTagName(tagName) <- Busca etiquetas HTML `tag` si no encuentra devuelve un array vacío.

```javascript
const page = document.getElementById('page'); // <- <div id="page">...</div>

const items = document.getElementsByClassName('item'); // <- [div, div, div]
console.log(items[0]); // <- Primer item encontrado: <div class="item">...</div>
console.log(items.length); // <- 3

//Obtiene todos los elementos con el atributo `name` a `value` igual a `nickname`
const NICK_NAMES = document.getElementsByName('nickname'); // <- [input]

//Obtiene todos los elementos <div> de la página
const DIVS = document.getElementsByTagName('div'); // <- [div, div, div]
```

-- MÉTODOS MODERNOS:

- querySelector(selector) <- Busca el primer elemento que coincide con el selector CSS `selector`, si no encuentra devuelve Null.
- querySelectorAll(selector) <- Busca todos los elementos que coinciden con el selector CSS `selector`, si no encuentra devuelve un array vacío.

```javascript
const PAGE = document.querySelector('#page'); // <- <div id="page">...</div>
const INFO = document.querySelectorAll('.main .info'); // <- <div class="info">...</div>

// Obtiene todos los elementos con la clase `info`
const INFOS = document.querySelectorAll('.info');

//Obtiene todos los elementos con el atributo `name = nickname`
const NICK_NAMES = document.querySelectorAll('[name="nickname"]');

//Obtiene todos los elementos <div> de la página HTML
const DIVS = document.querySelectorAll('div');
```

-- BÚSQUEDAS ACORTADAS: Al realizar una búsqueda de un elemento particular y guardarlo en una variable o constante, podemos volver a realizar una nueva búsqueda posteriormente sobre este elemento, en lugar del DOM integro `document`.

```javascript
const MENU = document.querySelector('#menu');
const LINKS = MENU.querySelectorAll('a');

//Si controlamos un poco de CSS, se puede hacer lo siguiente:
const LINKS = document.querySelectorAll('#menu a');
```

-- NODELIST O HTMLCOLLECTION: Los métodos de búsqueda generalmente devuelven un tipo de dato HTMLCollection o NodeList, que son listas de elementos HTML.

```javascript
const ELEMENTS = document.querySelectorAll('div');
ELEMENTS.map; // <- undefined

// Destructuración de arrays
const ELEMENTS = [...document.querySelectorAll('div')];
ELEMENTS.map; // <- f map() { [native code] }
```

### CREAR ELEMENTOS DEL DOM: ...
