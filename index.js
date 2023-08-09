const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req, res) => {
    // res.write('Node JS Server')
    // res.end()

    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', (error,data) => {
        if(error){
            res.writeHead(404)
            res.write('Error : File Not Found')
        }
        else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, (error) => {
    if(error)
        console.log('something went wronge')
    else
        console.log('server is running on port',port)
})