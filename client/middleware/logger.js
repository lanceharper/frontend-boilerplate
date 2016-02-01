/*eslint-disable */
export default store => next => action  => {
/*eslint-enable */
  console.log(action)
  return next(action)
}
