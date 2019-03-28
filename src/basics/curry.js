


module.exports = () => {

  const add = (a, b) => a + b
  const _add = a => b => a + b

  const addTen = _add(10)

  // console.log({
  //   ten1: add(3, 7),
  //   ten: addTen(0)
  // })
}