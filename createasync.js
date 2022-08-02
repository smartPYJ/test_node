const { readFile, writeFile, write } = require('fs')

readFile('./content/file2.txt', 'utf8', (err, result) => {

    if (err) {
        console.log(err);
        return;
    }
    const first = result
    readFile('./content/subfolder/file.txt', 'utf-8', (error, result) => {
        if (error) {
            console.log(error);
        }
        const second = result
        writeFile('./content/async-file.txt', `here is the result ${first} ${second}`, 'utf8', (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);

        })
    })
})