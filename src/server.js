const app = require('./app');
require('dotenv').config('./env'); //puxar passwords do .env

const PORT = process.env.PORT || 3335;
console.log(process.env.PORT);

app.listen(PORT, () => console.log(`server running on port ${PORT}`)); //rotas