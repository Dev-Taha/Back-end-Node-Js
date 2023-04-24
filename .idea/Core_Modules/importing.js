const { readFile,readFileSync } = require('fs'); // core modules

// async process
readFile('./data/story.txt','utf8', (err,data) => {
    if(err) {
        console.log(err);
        return;
    }

    console.log('async',data)
})
 // sync process
const content = readFileSync('./data/story.txt','utf8');
console.log(content);