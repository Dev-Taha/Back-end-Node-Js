const { open, writeFile } = require('fs');

open('./data/story.txt', 'a+', (err, fd) => { // mod a+ append
     if(err){
         console.log(err)
         return;
     }

     writeFile(fd, ' hello new story', (err) => {
         if (err){
             console.log(err)
         }
     })
 })