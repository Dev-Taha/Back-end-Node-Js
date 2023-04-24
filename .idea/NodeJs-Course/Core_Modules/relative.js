// لازم اشغلو فقط من نفش المسار الى موجود فيه الملف - ان كان من الخاارج فى الحالة هاي بشتغل عادي
const story = require('./data/story.txt');
// comment whene you run file
console.log(story);

// اما فى الفايل سيس ما بشتغل لو طلعنا برا المسار وشغلنا بطلعلى غير معرف
// لازم اشغل فى حالة الفايل سيس من نفس المجلد الى هوا نفس المكانالموجود فيه الملف الى بشتغل عليه

const { readFile } = require('fs');

readFile('./data/output.txt', 'utf8', (error,data) => {
    // console.log(error);
    console.log(data);
})