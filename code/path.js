var path = require('path')
var fullname = path.basename('/a/a/a/hello  .html')
var fullnameWithoutExt = path.basename('/a/a/a/hello.html', '.html')
var ext = path.extname('a/a/a/hello.html')

console.log(fullname)
console.log(fullnameWithoutExt)
console.log(ext)