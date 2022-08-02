const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/subfolder/file.txt', 'utf8')
const second = readFileSync('./content/file2.txt', 'utf8')

// console.log(first, second);

writeFileSync('./content/subfolder/file.txt', `${second} \n`)
writeFileSync('./content/file2.txt', `${first}`, { flag: 'a' })
