const { pbkdf2 } = require('crypto'); //sync process
const { createServer } = require('http'); // sync process

const start = Date.now();

const hash = () => {
    pbkdf2('12345**','##',10000, 1000, 'sha256' , () => {
        console.log('Hash ',Date.now() - start);
    })
}

const listen = () => {
    createServer().listen(5050 , () => {
        console.log('listening',Date.now() - start );
    })
}

hash();
hash();
hash();
hash();
listen(); // long process
// 4 threads for libuV -
// hash();
// wait for end 4 threads and run 5 pr
// lipuV - control to async code handling
// essintail component {event loop } - يتحكم فى نقل العمليات بين السينك والاسينك بياخد من السينك على الاسينك
// بعدين الكول باك من الليبو فى برجع الاكسشوشن تبعتها ل السينكروناس للبرنامج للكول ستاكس يعني