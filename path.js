const path = require('path')

console.log(path.sep);

const filepath = path.join('./content', 'subfolder', 'file.txt')

console.log(filepath);
console.log(path.basename(filepath));

const absolute = path.resolve(__dirname)
console.log(absolute);