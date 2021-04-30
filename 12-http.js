const http = require('http');

const server = http.createServer((req,res) => {
   
   if (req.url ==='/') {
       res.end('Jai Shri Ram')
   }
   if (req.url === '/about') {
    res.end('Jai shri Krishna')
   }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find that page</p>
    <a href ='/'>Back Home Page</a>
    
    `)
   
})
server.listen(5000);