import express from 'express';
import getAll from './controllers/tasksController.js'


const router = express.Router();

router.get('/tasks', getAll);




export default router