
import { __, add, replace } from 'ramda'

// Smart currying: Same result.
console.log({
  add1: add(2, 3),
  add2: add(2)(3)
})




// __ placeholder.
const greet = (a, b) => compose(
  replace('{name}', __, a),
  replace('{surname}', __)
)(b)

greet('Alice', 'asdad') // -> 'Hello, Alice!'