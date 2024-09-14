import express from 'express';
import tasksController from './controllers/tasksController.js'
import tasksMiddlewares from './controllers/middlewares/tasksMiddleware.js'

const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddlewares.validateFieldTitle, tasksController.createTaskk);
router.delete('/tasks/:id', tasksController.deleteTaskk)
router.put('/tasks/:id', 
    tasksMiddlewares.validateFieldTitle,
    tasksMiddlewares.validateFieldStatus, 
    tasksController.updateTaskk
);


export default router