import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import corsOptions from './config/cors.js';
import mongoDBConnect from './config/db.js';
import AuthRoutes from './routes/AuthRoutes.js';
import UserRoutes from './routes/UserRoutes.js';
import PostRouter from './routes/PostRoutes.js';
import CommentRouter from './routes/CommentRoutes.js';
import CategoryRouter from './routes/CategoryRoutes.js';

// dotenv configure
dotenv.config();

// environment vars
const PORT = 5000;
// process.env.PORT ||

// init express
const app = express();

// set middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors(corsOptions));

// set static folder
app.use(express.static('public'));

app.use(cookieParser());

// init router
app.use('/api/v1/auth', AuthRoutes);
app.use('/api/v1/user', UserRoutes);
app.use('/api/v1/post', PostRouter);
app.use('/api/v1/comment', CommentRouter);
app.use('/api/v1/category', CategoryRouter);

app.listen(PORT, async () => {
  await mongoDBConnect();
  console.log(`Server is running on port ${PORT}`.bgBlue);
});
