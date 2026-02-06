import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookiesParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import dbConnection from './database/dbConnection.js';
import { errorMiddleware } from './middlewares/error.js';

import messageRouter from './router/messageRoutes.js'
import userRouter from './router/userRoutes.js'
import timelineRouter from "./router/timelineRoutes.js"
import applicationRoutes from "./router/softwareApplicationRoutes.js"
import skillRoutes from "./router/skillRoute.js"
import projectRoutes from "./router/projectRoute.js"


const app = express();
dotenv.config({ path: './config/config.env' });
// console.log(process.env.PORT);

// FRONTEND AND BACKEND URLS CONNECTION
app.use(cors({
        origin: [process.env.PORTFOLIO_URL, process.env.DASHBOARD_URL],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
}))


app.use(cookiesParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}))

app.get('/', (req, res) => {
    res.send("Message")
})

app.use("/api/v1/message", messageRouter)
app.use("/api/v1/user", userRouter)
app.use("/api/v1/timeline",timelineRouter)
app.use("/api/v1/software", applicationRoutes)
app.use("/api/v1/skills", skillRoutes)
app.use("/api/v1/projects", projectRoutes)

dbConnection();

app.use(errorMiddleware)

export default app;