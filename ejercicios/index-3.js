// console.log(myName) // ❌ myName is not definde

let color = 'red'
if (true) {
  // Deben estár dentro de la condición para que sea definida
  let myName = 'Jab'
  let color = 'blue'
  console.log(myName) // Jab
  console.log(color) // blue
}

// console.log(myName) // ❌ error <- is not defined
// console.log(color) // ❌ error <- is not defined
