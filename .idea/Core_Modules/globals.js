console.log(global);

global.appname = 'my app';

console.log(process.argv); // that related with what is ايش العملية الى شغالة الان اكم مستهلكو وين شغالة فى اى ملف شغالة وكل ما يتعلق بها
console.log(process.env); // envoiroment of app
console.log(process.memoryUsage());