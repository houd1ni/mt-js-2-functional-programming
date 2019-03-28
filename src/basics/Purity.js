
module.exports = () => {

  const forAll = (fn, arr) => arr.map(fn)

  const a = [1,2,3,4,5]

  const b = forAll((x) => x*2, a)

  // console.log({ a, b })  // ?
}