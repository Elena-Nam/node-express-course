const { createReadStream } = require('fs')
const stream = createReadStream('../content/big.txt',{ highWaterMark: 200, encoding: 'utf8' })
let counter = 0;
stream.on('data', (result) => {
    counter++;
    console.log(result)
})
stream.on('end', () => {
    console.log(`Total chunks: ${counter}`)
})
stream.on('error', (err) => console.log(err))