// const { readFile, writeFile } = require('fs')

// readFile('./content/first.txt','utf8', (err, result) => {
//     if(err){
//         return;
//         console.log(err);
//     }
//     const first = result;
//     console.log(first);
// })
// writeFile('./content/practice-async.txt', `I am learning node.js through the heart please be with me.`, (err, result) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(result);
// })



const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Believe in yourself')
    res.end();
});

server.listen(1000);