
module.exports = () => {

  [1,2,3,4,5].map((val) => val * 3)

  const forAll = (fn, arr) => {
    arr.forEach((val, i) => arr[i] = fn(val, i))
  }
  
  const a = [1,2,3,4,5]

  // forAll((x) => x*2, a)

  // console.log({ a, b: a.map((val) => val * 2) })  // ?
}

