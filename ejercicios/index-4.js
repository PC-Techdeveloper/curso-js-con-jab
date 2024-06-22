let user = 'Jab'
let phurchasedProduct = 1
const DISCOUNT = 0.1

let discointPrice

const PRODUCTS = [
  {
    product: 'Jean',
    price: 10,
    size: 'm',
    img: '../assets/jean.png',
  },
  {
    product: 'Cap',
    price: 5,
    size: 'S',
    img: '../assets/cap.png',
  },
]

document.querySelector('body').innerHTML = `
<section class="box">
      <h1>${user}</h1>
      <div>${PRODUCTS[phurchasedProduct].product} (${PRODUCTS[phurchasedProduct].price} €)</div>
      <div>Descuento: ${calculateDiscount()} €</div>
      <div>
        <strong> Precio final: ${calculatePrice()} € </strong>
      </div>
      <div>Talla: <strong>${PRODUCTS[phurchasedProduct].size}</strong></div>
      <img class='cap' src="../assets/cap.png" alt="Una foto de una gorra" />
</section>`

function calculateDiscount() {
  priceDiscount = PRODUCTS[phurchasedProduct].price * DISCOUNT
  return priceDiscount
}

function calculatePrice() {
  priceDiscount = PRODUCTS[phurchasedProduct].price - calculateDiscount()
  return priceDiscount
}
