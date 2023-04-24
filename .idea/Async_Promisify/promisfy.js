const fs = require('fs');
const { promisify } = require('util');

// async using call back - no await function .
const getProductByName = (name,call_Back) => {
    fs.readFile('./data/product.json', 'utf8', (err, data) => {
        if(err){
            massage = {massage : 'can not find data'};
            call_Back(err,undefined);
            // like reject function = take erre
        } else {
            const json = JSON.parse(data);
            const product  =json.find(product => product.name === name);
            // like resolve funciton retrun product data
            call_Back(undefined,product);
        }
    })
}

const findProduct = promisify(getProductByName); // promisify function take name of function that i want convert to promisified funciton and return new function
// promisfiy to delete the call back == un useing call back
// this function i dont want to param call back in the signutura funciton TODO : CALL BACK BIG X
findProduct('Tea Ahmad')
    .then( product => {
        console.log(product)
    })
    .catch(err => {
        console.log(err.massage);
    });