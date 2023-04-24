const fs = require('fs');

// async - promis
//TODO: whene the async process is finished work return her output to sync
// باختصار البروميس بتعطي للبرنامج وعد انو لما تخلصى يا اسينك الشغل تبعك بترجعيلي اوتبوت وعد
const getProductByName = (name) => {
    return new Promise((resolve ,reject) => {
        const data = fs.readFileSync('./data/products.json');
        const JSON_DATA = JSON.parse(data);
        const product = JSON_DATA.find( product => product.name === name );

        if(product){
            resolve(product);
        } else {
            err = {massage : 'Sorry, Product is not Found !'}
            reject(err.massage);
        }
    })
}


// call back run
getProductByName('Tea Ahmad')
    .then( data => {
        console.log('Product price is : ',data.price)
    }) // response resolve for data - object
    .catch(err => {
        console.log('Error is : ',err.massage);
    }); // response reject for error





const getProductByName = (name, spye) => {
    const data = fs.readFileSync('./data/products.json');
    const JSON_DATA = JSON.parse(data);
    const product = JSON_DATA.find( product => product.name === name );

    if(product){
        spye(undefined, product);
    }else {
        spye( {massage : 'Product is not found'} , null);
    }
}


// call back run
getProductByName('Tea Ahmad',(err, data)=> {
    if(err){
        console.log('Error is : ',err.massage);
    }else{
        console.log('Data is : ',data.name);
        console.log('Data is : ',data);
    }
})

const getStoreById = (id) => {
    return new Promise((resolve, reject) => {
        const data = fs.readFileSync('./data/stores.json');
        const json = JSON.parse(data);

        const store = json.find(store => store.id === id);

        if(store){
            resolve(store);
        } else {
            reject({massage: 'Store id is not found ..'})
        }
    })
}

const getCityByName = (name) => {
    return new Promise((resolve, reject) => {
        const data = fs.readFileSync('./data/cities.json');
        const json = JSON.parse(data);
        const name = json.find(city => city.name === name);

        if(name) {
            resolve(name);
        } else {
            reject({massage : 'City name is noto found ..'});
        }
    })
}

