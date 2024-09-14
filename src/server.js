import app from './app.js'
import 'dotenv/config'; //puxar passwords do .env

const PORT = process.env.PORT || 3337;
console.log(process.env.PORT);

app.listen(PORT, () => console.log(`server running on port ${PORT}`)); //rotas
