const cities = require('../Async/data/cities.json');
const stors = require('../Async/data/stores.json');
const products = require("../Async/data/products.json");

//async proscess

const getCityByName = (name,callBack) => {
    setTimeout(() => {
        const city = cities.find(city => city.name === name);
        if(city){
            callBack(undefined ,city);
        }else {
            callBack({massage : 'city is not found'}, null);
        }

    },500)
};

const getStoreById = (id,spye) => {
    setTimeout(() => {
        const store = stors.find( store => store.id === id );
        if(store){
            spye(undefined ,store);
        }else {
            spye({massage : 'store is not found'}, null);
        }
    },500);
};

const getProductByName = (name,callBack) => {
    setTimeout(() => {
        const product = products.find(product => product.name === name);
        if(product){
            callBack(undefined ,product);
        }else {
            callBack({massage : 'product is not found'},null);
        }
    },500)
};

// get store that sell exact product - give u product  this product when any store is sell - product and store

tetsProductName = 'Tea Ahmad';
// Q : get the store tha selling feh
// call hell - compexity of code is high - complex
getProductByName(tetsProductName, (err ,product) => {
    if (err){
        console.log('Error is ',err.massage);
    }else {
        const storeId = product.store_id;

        getStoreById(storeId,(err, store) => {
            if (err) {
                console.log('Error is ',err.massage);
            } else {
                console.log('Store is : ',store);

                const cityName = store.city;

                getCityByName(cityName,(err, city) => {
                    if(err){
                        console.log('Error is ',err.massage);
                    } else {
                        console.log('Name Of Stroe is : ',city.name);
                    }
                });
            }
        });
    }
});

