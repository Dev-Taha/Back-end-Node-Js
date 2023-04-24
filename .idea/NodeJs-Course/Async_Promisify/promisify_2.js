const { readFile } = require('fs');
const { promisify } = require('util');

readFile('./data/product.json', 'utf8', (err, data) => {
        if(err){
            massage = {massage : 'can not find data'};
            console.log(err.massage);
            return;
        } else {
            const json = JSON.parse(data);
            const product  =json.find(product => product.name === name);
            // like resolve funciton retrun product data
            call_Back(undefined,product);
        }
    });

const pReadFile = promisify(readFile);
pReadFile('./data/product.json', 'utf8') // no param caal back .....
    .then(data => {
        // data
    })
    .catch(err => {
        // err
    });