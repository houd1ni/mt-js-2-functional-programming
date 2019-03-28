
const { compose } = require('./native.js')

module.exports = async () => {

  // DEFINE BASICS
  const add = (a) => (b) => b + a
  const sub = (a) => (b) => b - a
  const multiply = (a) => (b) => b * a
  const pow = (a) => (b) => b ** a
  const map = (fn) => (arr) => arr.map(fn)
  const reduce = (fn, accum) => (arr) => arr.reduce(fn, accum)

  // LEVEL 1
  const addMultiply = compose(
    add(5),
    multiply(3)
  )
  // console.log('\naddMultiply(5) -> ', addMultiply(5))


  // LEVEL 2
  const addQ = (a, b) => compose(
    add(a),
    pow(2)
  )(b)
  const qSum = reduce(
    (accum, cur) => addQ(accum, cur)
  , 0)
  const diff = (v2) => map(
    (val, i) => sub(v2[i])(val)
  )
  const length = compose(
    pow(0.5),
    qSum
  )
  const diffLength = (v1, v2) => compose(
    length,
    diff(v2)
  )(v1)

  // console.log('\ndiffLength(...) -> ', diffLength([2, 3], [3, 4]))


  // LEVEL 3
  const composeAsync = (...fns) => {
    const waitress = async (data, i) => {
      data = await fns[i](data)
      if(--i<0) {
        return data
      }
      return await waitress(data, i)
    }
    return async (data) => await waitress(data, fns.length-1)
  }
  const add5Slowly = (a) => new Promise((ff) =>
    setTimeout(() => ff(a + 5), 2000)
  )
  const doubleSlowly = (a) => new Promise((ff) =>
    setTimeout(() => ff(a * 2), 1000)
  )
  console.log('\ncomposeAsync:')
  console.log(await composeAsync(
    doubleSlowly,
    add5Slowly
  )(10))
  composeAsync(
    console.log,
    doubleSlowly,
    add5Slowly
  )(10)

}