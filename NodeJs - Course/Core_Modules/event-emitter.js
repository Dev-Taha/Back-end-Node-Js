const { EventEmitter } = require('events');

const myEmitter = new EventEmitter();

// Async process

myEmitter.on('greeting', () => {
    console.log('Welcome to my Application !')
})

myEmitter.on('greeting', (name) => {
    console.log(`Welcome Mr ${name}`);
})

myEmitter.emit('greeting', 'Taha Ahmed');
//الايفت اميتر بستخدموا لو بدي اعرف وين واصلة العملية مثلا ايش الانجاز الى صار من 5 انجز 2 من 5 - بجي عمل اشعار للمستخدم انو تمت العملية بنجاح - بتتبع سير العمليات وين صارت TRACKING