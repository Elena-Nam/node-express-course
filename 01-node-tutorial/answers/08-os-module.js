const os = require('os')

const currentOS = {
  name: os.type(),
  release: os.release(),
  version: os.version(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  directory: os.homedir()
}
console.log(currentOS)
