const { open,readFile } = require('fs')
//async
open('./data/story.txt', (err,data) => {
    if(err) {
        console.log(err);
        return;
    }

    readFile(data, 'utf8', (err,contente) => {
        if(err) {
            console.log(err);
            return;
        }

        console.log(contente)
    });
})