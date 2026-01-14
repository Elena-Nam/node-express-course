const Product = require('../models/product')
// for manual set up:
const getAllProductsStatic = async(req, res) => {
  const products = await Product.find({ price: {$gt:30} })
    .sort('price')
    .select('name price')
    // .limit(10)
    // .skip(1)

  res.status(200).json({products, nbHits: products.length})
}
//
const getAllProducts = async(req, res) => {
  // filter by queries
  const{featured, company, name, sort, fields, numericFilters} = req.query
  const queryObject = {}
  if(featured) {
    queryObject.featured = featured === 'true'? true: false
  }
  if(company) {
    queryObject.company = company 
  }
  if(name) {
    queryObject.name =  {$regex: name, $options: 'i'}
  }
 // numeric filters parser pattern
  if(numericFilters) {
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };
    const regEx = /\b(>=|<=|>|<|=)\b/g;
    let filters = numericFilters.replace( 
    // replace operators with MongoDB-style tokens.
      regEx, 
      (match) => 
      `-${operatorMap[match]}-` 
    )
    const options = ['price', 'rating'];
    filters.split(',').forEach((item) => {
      const [field, operator, value] = item.trim().split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  console.log(queryObject)

  /* You cannot do "await" twice on the same value!!!
  --- wrong!!! ---
  let result = await Product.find(queryObject)
  const products = await result
  ---
  "result" is already an array, not a Promise
  await only works on Promises
  This will throw an error like: TypeError: result is not a Promise
  
  Mongoose queries can be “chained” (e.g., .sort(), .limit()) before execution.
  Do NOT await until all Mongoose query chaining is done.

  You only await once, after building the full query.
  If you await first, you get a plain array, and then .sort(string) breaks.
  await executes the query → returns a plain array
*/
  
  let result = Product.find(queryObject) // build query
  // sorting
  if(sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList); // chain .sort(), etc.
    console.log(sort)
  } else {
    result = result.sort('createdAt');
  }
  // selecting fields
  if(fields){
    const fieldsList = fields.split(',').join(' ');
    result = result.select(fieldsList); 
  }
  // pagination
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const skip = (page -1) * limit
  result = result.skip(skip).limit(limit)
  
  const products = await result  // finally execute
  res.status(200).json({products, nbHits: products.length})
}

module.exports = {
  getAllProductsStatic,
  getAllProducts,
}