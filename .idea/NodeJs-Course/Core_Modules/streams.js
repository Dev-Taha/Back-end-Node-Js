//فتح قناة بين المرسل والمستقبل لنقل البيانات chunck
// files - client - server
/**
 * types :
 * read - write -  duplex - transfer
 */
const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('./data/story.txt');

const writeStream = createWriteStream('./data/output.txt');

readStream.pipe(writeStream);