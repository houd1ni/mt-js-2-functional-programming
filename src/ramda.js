
import { __, add, replace } from 'ramda'

// Smart currying: Same result.
console.log({
  add1: add(2, 3),
  add2: add(2)(3)
})




// __ placeholder.
// https://ramdajs.com/docs/#__
const greet = replace('{name}', __, 'Hello, {name}!')

greet('Alice') // -> 'Hello, Alice!'