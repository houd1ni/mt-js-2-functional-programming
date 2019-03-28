
module.exports = () => {

  // Side-effect is a more common case.

  const add = (value) => Date.now() + value

  add(3)
  add(5)
  add(5)

  // console.log({ x }) // ?
}