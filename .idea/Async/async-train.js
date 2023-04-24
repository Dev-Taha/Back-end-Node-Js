const cities = require('./data/cities.json');
const stors = require('./data/stores.json');


const getCityByName = (name,callBack) => {
    setTimeout(() => {
        const city = cities.find(city => city.name === name);
        callBack(city);
    },500)
};

const calll_Back = (city) => {
    console.log('Name of City is : ',city.name);
    console.log('Object of City is : ',city);
}

//async
const getStoreById = (id,spye) => {
    setTimeout(() => {
        const store = stors.find( store => store.id === id );
        spye(store);
    },500);
}
// call Back
const spye = (store) => {
    console.log('Id of Store is : ',store.id);
    console.log('Object of Store is : ',store);
}

getCityByName('Rafah',calll_Back);
getStoreById(2,spye);