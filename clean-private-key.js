const fs = require('fs')

const output = fs.readFileSync('private.key', 'UTF-8').replace(/\n/g, '')

console.log(output)
