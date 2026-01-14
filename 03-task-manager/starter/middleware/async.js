// const asyncWrapper = (fn) => {
//   return async(req, res, next) => {
//     try {
//       await fn (req, res, next)
//     } catch (error) {
//       next(error)
//     }
//   }
// }

 // the same //
const asyncWrapper = (fn) => (req, res, next) => 
  Promise.resolve(fn (req, res, next)).catch (next)


module.exports = asyncWrapper