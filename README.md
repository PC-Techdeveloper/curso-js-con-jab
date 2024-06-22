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

## Arrays de objetos:

-- Los arrays de objetos son un tipo de objeto que contiene objetos, los objetos pueden ser de cualquier tipo. Los objetos que se almacenan en un array de objetos se llaman elementos del array.

-- El valor de NaN (Not a Number): Es un valor especial que se utiliza para indicar que un valor no es numérico.

## JavaScript es un lenguaje de tipado dinámico

Es un lenguaje de programación que se basa en el tipado dinámico, lo que significa que no es necesario indicar el tipo de datos de cada variable antes de utilizarla. En lugar de esto, el tipo de datos se inferencia automáticamente a partir de la información que se le proporciona al programa.

-- El valor de NaN (Not a Number): Es un valor especial que se utiliza para indicar que un valor no es numérico.

-- Controlar el tipo de datos de una variable:

```javascript
console.log(typeof $firstName)
```

## Contenido dinámico en JavaScript:

-- 3 Tipos diferentes de comillas (Single, Double, Backtick)

```javascript
let name1 = 'JAB'
let name2 = 'JAB'
let name3 = `JAB`

let age = 18

let result = 'My name is ' + name1 + ' y mi edad es ' + age
let result2 = 'My name is ' + name2 + ' y mi edad es ' + age
let result3 = `My name is ${name3} y mi edad es ${age}`
```

## Uso de las funciones con la interpolación de strings:

```javascript
let name = 'Javier'
let myAge = 18
let actual = new Date().getFullYear() // <- Date object

function calculateYearOfBirth(miEdad) {
  return actual - miEdad
}

let result4 = `My name is ${name} and my age is ${age} years old. I was born in ${calculateYearOfBirth(myAge)}`

console.log(result4) // My name is Javier and my age is 18 years old. I was born in 1994
```

## Contenido HTML (Contenido dinámico con JavaScript)

-- Contenido dinámico en HTML: InnerHTML sirve para modificar el contenido de un elemento HTML.
-- querySelctor: Permite seleccionar un elemento HTML en el DOM.
-- innerHTML: Permite modificar el contenido de un elemento HTML.
-- createElement: Permite crear un nuevo elemento HTML.
-- appendChild: Permite añadir un nuevo elemento HTML a un elemento existente.

```javascript
document.querySelector('body').innerHTML = `
<div>Mi nombre es <span class="nombre">${name}</span></div>
<div>Mi edad es <span class="edad">${age}</span></div>
<img class='img' src="${imagen}" alt="Una foto de Jefferson, laborando en la COMPUTERIA">`
```

# Operadores y expresiones

```javascript
//Operador de asignación <- =
//Operadores de asignación compuesta <- +=, -=, *=, /=, %=, **=
//Incremento y decremento .<- ++, --
//Operadores de comparación <, >, <=, >=
```

# Manejo del DOM con JavaScript

-- MÉTODOS TRADICIONALES DEL DOM:

- getElementById(id) <- Busca el elemento HTML por su id, si no encuentra devuelve Null.
- getElementsByClassName(className) <- Busca todos los elementos con la clase `class`, si no encuentra devuelve un array vacío.
- getElementsByName(name) <- Busca elementos con el atributo `name` a `value`, si no encuentra devuelve un array vacío.
- getElementsByTagName(tagName) <- Busca etiquetas HTML `tag` si no encuentra devuelve un array vacío.

```javascript
const page = document.getElementById('page') // <- <div id="page">...</div>

const items = document.getElementsByClassName('item') // <- [div, div, div]
console.log(items[0]) // <- Primer item encontrado: <div class="item">...</div>
console.log(items.length) // <- 3

//Obtiene todos los elementos con el atributo `name` a `value` igual a `nickname`
const NICK_NAMES = document.getElementsByName('nickname') // <- [input]

//Obtiene todos los elementos <div> de la página
const DIVS = document.getElementsByTagName('div') // <- [div, div, div]
```

-- MÉTODOS MODERNOS:

- querySelector(selector) <- Busca el primer elemento que coincide con el selector CSS `selector`, si no encuentra devuelve Null.
- querySelectorAll(selector) <- Busca todos los elementos que coinciden con el selector CSS `selector`, si no encuentra devuelve un array vacío.

```javascript
const PAGE = document.querySelector('#page') // <- <div id="page">...</div>
const INFO = document.querySelectorAll('.main .info') // <- <div class="info">...</div>

// Obtiene todos los elementos con la clase `info`
const INFOS = document.querySelectorAll('.info')

//Obtiene todos los elementos con el atributo `name = nickname`
const NICK_NAMES = document.querySelectorAll('[name="nickname"]')

//Obtiene todos los elementos <div> de la página HTML
const DIVS = document.querySelectorAll('div')
```

-- BÚSQUEDAS ACORTADAS: Al realizar una búsqueda de un elemento particular y guardarlo en una variable o constante, podemos volver a realizar una nueva búsqueda posteriormente sobre este elemento, en lugar del DOM integro `document`.

```javascript
const MENU = document.querySelector('#menu')
const LINKS = MENU.querySelectorAll('a')

//Si controlamos un poco de CSS, se puede hacer lo siguiente:
const LINKS = document.querySelectorAll('#menu a')
```

-- NODELIST O HTMLCOLLECTION: Los métodos de búsqueda generalmente devuelven un tipo de dato HTMLCollection o NodeList, que son listas de elementos HTML.

```javascript
const ELEMENTS = document.querySelectorAll('div')
ELEMENTS.map // <- undefined

// Destructuración de arrays
const ELEMENTS = [...document.querySelectorAll('div')]
ELEMENTS.map // <- f map() { [native code] }
```
