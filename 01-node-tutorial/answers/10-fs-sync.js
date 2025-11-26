// usual way
const fs = require('fs');
// the same with destructuring //
// const {readFileSync, writeFileSync} = require ('fs');

fs.writeFileSync('./temporary/fileA.txt', 'I spent too much time to find the error with the path.\n',
  { flag: 'a' }
)
fs.writeFileSync('./temporary/fileA.txt', 'My mistake was calling the finction without fs.\n',
  { flag: 'a' }
)
fs.writeFileSync('./temporary/fileA.txt','This is the result', 
  { flag: 'a' }
)
fs.readFileSync('./temporary/fileA.txt', 'utf8')
console.log('this task is finished')