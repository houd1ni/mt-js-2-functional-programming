
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


module.exports = composeAsync(
  doubleSlowly,
  add5Slowly
)