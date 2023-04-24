const { stat } = require('fs')
//async
stat('./opendir.js', (err,state) => {
    console.log(state)
})