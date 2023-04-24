const { opendir } = require('fs')

// opendir & callback = async process
opendir('./',async (err,dir) => { // non-blocking -- call back async - handling via async
    for await (let dirent of dir){ //await = blocking - to run syncrounsly
        console.log(dirent.name)
    }
})