const { readFileSync, writeFileSync } = require('fs')

console.log('start');

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/subfolder/second.txt','utf-8')


writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}`, {flag: 'a'})

console.log('done with this task');

// Starting The next One

console.log('Starting the next one');