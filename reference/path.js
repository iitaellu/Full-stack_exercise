const path = require('path')

// Base file name

console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// FIle Extension
console.log(path.extname(__filename));

// Create path obect
console.log(path.parse(__filename));