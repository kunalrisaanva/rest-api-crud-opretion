const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config()
const connecdb = require('./config/connection/connection')
const friendRouter = require("./src/router/router")
const PORT =  process.env.PORT 


//  connection

connecdb(process.env.DBURL)

// middlweare

app.use(express.json());
app.use(friendRouter);


app.listen(PORT,() => {
    console.log(`app listening on PORT ${PORT}`)
})