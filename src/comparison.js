

const multiply = (a, b) => a * b
const addOne = x => x + 1
const square = x => x * x

// IMPERATIVE
const operate = (x, y) => {
  const product = multiply(x, y)
  const incremented = addOne(product)
  const squared = square(incremented)
 
  return squared
}
 
operate(3, 4) // => ((3 * 4) + 1)^2 => (12 + 1)^2 => 13^2 => 169

// INLINED
const operate = (x, y) => square(addOne(multiply(x, y)))


// FUNCTIONAL
const operate = compose(
  square,
  addOne,
  multiply
)