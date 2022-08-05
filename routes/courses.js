const express = require('express');
const router = express.Router();
const asyncHandler = require('../src/js/async.js');
const Course = require('../models/').Courses;

//Route that returns all Courses including the User associated with each course and a 200 HTTP status code.
router.get('/courses', asyncHandler(async (req, res) => {
    let courses = await Course.findAll();
    console.log(courses);
    res.status(200).json(courses);
}));

//Route that returns a specific course and user associated with that course, and a 200 HTTP status code. 
router.get('/courses/:id', asyncHandler(async (req, res) => {
    console.log('test grab course and user');
}));

//Route that will create a new course, set the location header to the URI for the new course, and a 201 HTTP status code. 
router.post('/courses', asyncHandler(async (req, res) => {
    console.log('test create new course');
}));

//Route that will update the corresponding course, and a 204 HTTP status code. 
router.put('/courses/:id', asyncHandler(async (req, res) => {
    console.log('test update course');
}));

//Route that will delete the corresponding course, and a 204 HTTP status code. 
router.delete('/courses/:id', asyncHandler(async (req, res) => {
    console.log('test delete course');
}));

module.exports = router;