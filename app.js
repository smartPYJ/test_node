const  http = require('http')

const server = http.createServer( (req,res)=> {
if (req.url === '/'){
res.end('Welcome to our home page')
}
else if (req.url === '/about'){
res.end('welcome to our About us page ')
}
else {
    res.end(`
    <center>
    <h1>Oops!!</h1>
    <p> The page you are looking for cant be found</p>
    <a href='/'> Lets take you back HomE</a>
    
    </center>
    `)
}
})
server.listen(5500)