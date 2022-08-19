const express = require('express');
const router = express.Router();
const asyncHandler = require('../src/js/async.js');
const User = require('../models').User;

// Route that returns all properties and values for authenticated user, and a 200 HTTP status code.
router.get('/users', asyncHandler(async (req, res) => {
    console.log('Showing Users!');
    let users = await User.findAll();
    res.status(200).json(users);
}));

//Route that creates a new user and sets new location header to "/", and a 201 HTTP status code. 
router.post('/users', asyncHandler(async (req, res) => {

}));

module.exports = router;