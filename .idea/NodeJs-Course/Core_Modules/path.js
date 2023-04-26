const path = require('path');

console.log(__filename)

console.log(path.basename(__filename));

console.log(path.extname(__filename)) // extenstion of file name

console.log(path.parse(__filename)) // return object

console.log(path.join('./data','story.txt')) // concatination of these pathes

const { readFile } = require('fs')

readFile(path.join(__dirname,'data','story.txt'), 'utf8', (err,data) => {
    console.log(data)
})