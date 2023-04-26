
//async await - save the code style as his like = no change with code style
// async process fetch() - I/O operation
// async mean - السطر رقم 14 حيتنفذ ولس السطر هذا غير منفذ
//  اى حاجة داخل بلوك ال ايسنك لازم تكون سينكرونسلى بلوكنج اوبريشن - no non-blocking operation in block of code
// async await function
const getData = async () => { // independant program - all of the handling inside the block
    // async process always return promis - default in js
    // runing must stay in this code until to return response
    const response =await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
    // beacuse it s a non-blocking operation we write await to convert non-blocking operation to blocking

    // sync process
    if(response.status !== 200){
        // err
        err = { massage : 'can not found resource ..' };
        //return err; // this is a mistake - handle in asyn is err
        throw new Error('Can not found object ...');
    }
    //sync
    // array of object
    const json =await response.json();
    // code style for all line is already sync - to know that i can use async = write side arrow function
    // console.log(json);
    return json;
}
// block async
getData().then(json => {
    console.log(json)
}).catch(err => {
    console.log(err.massage)
});