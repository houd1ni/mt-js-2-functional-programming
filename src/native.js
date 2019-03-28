
module.exports = {
  compose(...fns) {
    return (data) => fns.reverse().reduce((accum, fn) => fn(accum), data)
  }
}