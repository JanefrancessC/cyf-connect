import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js';

const app = express();
app.use('/api', postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://janefrancess:ORoL929jqp3qavdk@cluster0.0m35zmc.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

//connect to mongoose cluster

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, ()=> console.log('Server listening on port: '+ PORT)))
.catch(err =>console.error(err.message));

// mongoose.set('useFindAndModifiy', false)