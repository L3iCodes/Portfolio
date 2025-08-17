import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import projectRoutes from './routes/project.routes.js'
import imageRoutes from './routes/image.routes.js'

dotenv.config();

// Setup app / server
const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at Localhost: ${PORT}`)
});

app.use(express.json({
    strict: true,
}));

// Setup CORS
const ORIGIN_CLIENT = process.env.ORIGIN_CLIENT || 'http://localhost:5173';
app.use(cors({
    origin: ORIGIN_CLIENT,
    credentials: true
}));

// Setup MongoDB
const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL)
    .then(() => console.log('Connected to Database'))
    .catch(error => console.log(`Can't connect to Database. Error: ${error}`));

app.use("/api/project", projectRoutes);
app.use("/api/image", imageRoutes);