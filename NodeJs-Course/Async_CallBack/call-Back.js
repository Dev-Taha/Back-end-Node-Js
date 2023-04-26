/**
 * handle with output async
 * call Back
 * promiss
 * async/await
 */

const computeTax = (amount, taxPercent) => {
    const tax = (taxPercent / 100) * amount;
    return tax;
}

console.log('sync : ',computeTax(500,20));

const cb = () => {
    console.log('async : ',computeTax(700,50));
}

setTimeout(cb,200);
 


