const { pbkdf2 } = require('crypto'); //sync process

const start = Date.now();


const hash = () => {
    pbkdf2('12345**','##',10, 100, 'sha256' , () => {
        console.log('Hash ',Date.now() - start);
    })
}


const encrypt = () => {
    pbkdf2('12345**','##',100000, 1000, 'sha256' , () => {
        console.log('encrypt ',Date.now() - start);
    })
}

setImmediate( () => { // تنفذ فى بداية اللوب تك التالية
    console.log('setImmeadiate',Date.now()-start);
})

encrypt();
hash();
hash();

process.nextTick( () => { // تنفذ بشكل مباشر فى اول اللوب التك
    console.log('nextTick', Date.now() - start)
})

hash();
hash();