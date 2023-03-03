const mongoose = require('mongoose');
const User = require('../models/userModal');

//Get User
exports.getUser = async (req,res) =>{
    try {
        const users = await User.find({}, '-__v');
        res.json(users);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}

// Create User
exports.createUser = async (req,res)=>{
    try {
        const userData = req.body;
        const existingUser = await User.findOne({ name: userData.name });
        if (existingUser) {
          res.status(409).json({ error: 'User already exists' });
        } else {
          const newUser = new User(userData);
          await newUser.save();
          res.status(201).json(newUser);
        }
      } catch (error) {
        res.status(500).send('Internal Server Error');
    }
  
}

// Update  an existing User

exports.updateUser = async (req,res)=>{
    
    try {
        const userId = req.params.userId;
        const userData = req.body;
        const updatedUser = await User.findByIdAndUpdate(userId, userData, {
          new: true,
          runValidators: true
        });
        res.json(updatedUser);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}

//Delete User

exports.deleteUser = async (req,res)=>{

    try {
        const userId = req.params.userId;
        await User.findByIdAndDelete(userId);
        res.status(200).json({message:"user deleted successfully"});
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    }




