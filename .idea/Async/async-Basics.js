/**
 * 2 exec : sync , async - sync single execution
 * my code is running ou sync - async it is not related in code
 * thuse - setTimeout() func set async execution in backgroung - not seeing - multithreding
 * 2 - operation : blocking - non-blocking
 */
console.log(1)
console.log(2)

const print = () => {
    console.log('action fired !')
}

setTimeout(print, 1000)

console.log(3)
console.log(4)