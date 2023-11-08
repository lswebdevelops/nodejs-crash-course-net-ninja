const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog4.txt')
const writeStream = fs.createWriteStream('./docs/blog5.txt')
// writes like a  'pipe' 
readStream.pipe(writeStream);
