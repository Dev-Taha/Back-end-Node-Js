const products = require('../Async/data/products.json');

//async
const getProductByName = (name,callBack) => {
    setTimeout(() => {
        const product = products.find(product => product.name === name);
        callBack(product);
    },500)
}

//call Back
const callBack = (product) => {
    console.log('Product price is : ',product.price);
    console.log('Product is : ',product);
}

getProductByName('Tea Ahmad',callBack);