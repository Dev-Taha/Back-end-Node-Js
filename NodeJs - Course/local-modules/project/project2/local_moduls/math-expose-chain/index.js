// الملف الرئيسي الى من خلاله حستدعي الفولدر كامل وهو اورديي حيستدعي ملف الاندكس مباشر لانو مبرمج عندو انو الاندكس هو الرئيسي للملفات
// const multiply = require('./multiply');
// const sum = require('./sum');
const divisionOps = require('./division'); // this is an object that contains 2 method

module.exports = {
    sum: require('./sum'),
    multiply: require('./multiply'),
    division : divisionOps,
    div: divisionOps.division,
    reminder : require('./division').reminder
}