const path = require('path');

console.log(path.sep)

const joinedFilePath = path.join('01-node-tutorial', 'answers', '09-path-module.js')
console.log(joinedFilePath)

const base = path.basename(joinedFilePath)
console.log("The file name:" , base)

const absolute = path.resolve(__dirname, '01-node-tutorial', 'answers', '09-path-module.js')
console.log("The absolute path to this file:", absolute)
