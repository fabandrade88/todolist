import 'dotenv/config';
import mysql from 'mysql2/promise';

console.log(process.env.MYSQL_HOST)

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todolist',
});


export default connection;