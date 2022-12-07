const express = require("express");
const mongoose = require("mongoose");
const Friend = require("../models/friendsModel");
const { param } = require("../router/router");



// create data 

 const createData = async(req,res) => {
   const {name,email,mob,adress} =  req.body 
     try {
        const user = new Friend({
            name,
            email,
            mob,
            adress
        })
         const savedUser = await user.save()
         console.log(savedUser);
         res.send("data inserted").status(201)
     } catch (error) {
        console.log(error)
     }
}


// read data 

const readData = async(req,res) => {
    try {
        const find = await Friend.find();
        res.send(find).status(200)
    } catch (error) {
        console.log(error);
    }
}

// read particuler data

const particulerData = async(req,res) => {
   try {
    const _id = req.params.id
     const user = await Friend.findById({_id:_id});
    res.send(user).status(200)
   } catch (error) {
     console.log(error)
   }
}


// update 


const updateData = async (req,res) => {
    try {
        const _id = req.params.id
        const user = await Friend.findByIdAndUpdate(_id, req.body)
        res.send(user).status(200)
    } catch (error) {
        console.log(error)
    }
}


// delete

const deleteData = async (req,res) => {
    try {
        const _id = req.params.id
        const user = await Friend.findByIdAndDelete(_id);
        res.send(user).status(200)
        console.log(user)
    } catch (error) {
        console.log(error)
    }
} 


module.exports = {
    createData,
    readData,
    particulerData,
    updateData,
    deleteData
}