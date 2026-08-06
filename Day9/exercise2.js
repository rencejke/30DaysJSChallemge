//exercise level 2


//1 Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const totalPriceProduct = products.filter(product => product['price'].toString().trim('').length !== 0).map(getPrice => getPrice['price']).reduce((acc, curr) => acc + curr )
console.log(totalPriceProduct) //27

//2
//Find the sum of price of products using only reduce reduce(callback))
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


const totalPriceProduct2 = products.reduce((acc, curr) => 
{
    if(curr['price'].toString().trim().length !== 0)
    {
        return acc + curr['price'];
    } else
    {
        return acc
    }
}, 0)
console.log(totalPriceProduct2)

