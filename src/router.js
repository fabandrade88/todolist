const express = require('express');
const tasksControllers = require('./controllers/tasksController')


const router = express.Router();

router.get('/tasks', tasksControllers.getAll);



module.exports = router;