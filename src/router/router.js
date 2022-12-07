const express = require("express");
const friendRouter = express.Router();
const {
    createData,
    readData,
    particulerData,
    updateData,
    deleteData
} = require("../controller/friendsController");
const Friend = require("../models/friendsModel")


//routes

friendRouter.post("/friends",createData);
friendRouter.get("/friends",readData);
friendRouter.get("/friend/:id",particulerData);
friendRouter.patch("/friend/:id",updateData);
friendRouter.delete("/friend/:id",deleteData);

module.exports = friendRouter