const mongoose = require("mongoose");


async function connecdb(URL) {
    await  mongoose.connect(URL)
    console.log('db connected')
}


module.exports = connecdb