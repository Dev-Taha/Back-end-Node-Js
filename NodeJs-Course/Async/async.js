const products = require('./data/products.json');

// async
const getProductByName = (name) => {
    setTimeout(() => {  // non - blocking - async
        const product = products.find(product => product.name === name); // return name of product -- blocking -- sync run
        return product;
    },1000);
};

/**
 * handle with output async
 * call Back
 * promiss
 * async/await
 */