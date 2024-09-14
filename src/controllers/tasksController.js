import getAlll from '../models/taskModel.js'

const getAll = async (req, res) => {

    const tasks = await getAlll()

    return res.status(200).json(tasks)

}

export default getAll