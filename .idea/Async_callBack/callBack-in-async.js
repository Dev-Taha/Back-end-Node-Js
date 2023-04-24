const fs = require('fs');

// async using call back - no await function .
const getProductByName = async (name,call_Back) => {
    fs.readFile('./data/product.json', 'utf8', (err, data) => {
        if(err){
            massage = {massage : 'can not find data'};
            call_Back(err,undefined);
        } else {
            const json = JSON.parse(data);
            const product  =json.find(product => product.name === name);
            call_Back(undefined,product);
        }
    })
}

getProductByName('Tea Ahmad',async (err,data)=>{
    if(err){
        console.log(err.massage);
    } else {
        console.log(data);
    }
});