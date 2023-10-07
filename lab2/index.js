import http from 'http'


const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.statusCode = 200
            res.setHeader('content-type', 'text/plain')
            res.end('hello world')
            break;
        case '/users':
            res.statusCode = 200
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify({ name: 'ali', age: 30 }))
            break;
        default:
            res.statusCode = 404
            res.setHeader('content-type', 'text/plain')
            res.end('Not Found')
    }
})

server.listen(3000, 'localhost', () => {
    console.log('Running: http://localhost:3000')
})

