import taskModel from '../models/taskModel.js'

const getAll = async (req, res) => {

    const tasks = await taskModel.getAlll()

    return res.status(200).json(tasks)

}

const createTaskk = async (req, res) => {
    const createdTaskk = await taskModel.createTask(req.body)
    return res.status(201).json(createdTaskk);

};

const deleteTaskk = async (req, res) => {
    const { id } = req.params;
    await taskModel.deleteTask(id);
    return res.status(204).json();

}

const updateTaskk = async (req, res) => {
    const { id } = req.params;
    await taskModel.updateTask(id, req.body);
    return res.status(204).json();
}
export default {getAll, createTaskk, deleteTaskk, updateTaskk}