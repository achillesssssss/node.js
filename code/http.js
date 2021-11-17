const http = require('http')
var server = http.createServer()
server.on('request', function(req, res) {
    console.log('Someone visit our server')
    console.log(req.url)
    console.log(req.headers)
    console.log(req.method)
    res.setHeader('content-type', 'text/html; charset=UTF-8')
    res.end("欢迎")

})
server.listen(8080, () => {
    console.log('server running at http://127.0.0.1:8080');
})