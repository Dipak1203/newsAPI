import express from 'express';
import cors from 'cors';
import router from './src/routes/NewsRoutes.js';
import 'dotenv/config'
import './src/db/db.js'
import body from'body-parser';

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());
app.use(express.static('public'))
app.use(router);


app.listen(PORT,() =>{
    console.log(`server is running at http://localhost:${PORT}`);
})