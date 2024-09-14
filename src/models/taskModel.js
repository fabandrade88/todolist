import connection from './connection.js'


const getAlll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks')
    return tasks
};

export default getAlll;
