const products = [
    { name: 'laptop', price: 32000, brand: 'lenovo', color: 'selver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
    { name: 'camers', price: 9000, brand: 'canon', color: 'gray' }
]

const product = products.map(product => product.brand)
// console.log(product)

const prices = products.map(product => product.price)
// console.log(prices)

products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))

const cheap = products.filter(goods => goods.price <= 500)
console.log(cheapgit)