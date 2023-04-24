const num =50 ;

if(num == '50'){   // '50' == 50 - == based on value      // comparsion based on value not type
    console.log('equaled');
}else if(num > 50){
    console.log('greater')
}else {
    console.log('less')
}

// === compared based on the type just

const num2 = 20;

if (num2 === '20'){ // === based on the type - identital equality conditions
    console.log('true');
}else {
    console.log('false');
}