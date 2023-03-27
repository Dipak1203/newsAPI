import express from 'express';
import cors from 'cors';
import router from './src/routes/NewsRoutes.js';
import 'dotenv/config'
import './src/db/db.js'


const app = express();
const PORT = process.env.SERVER_PORT || 5000;

app.use(router);


app.listen(PORT,() =>{
    console.log(`server is running at http://localhost:${PORT}`);
})