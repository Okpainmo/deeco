// dependency imports
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './microservices/user/routes/auth.router.js';
// dependency inits
const app = express();
dotenv.config();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// utils import
import dbConnector from './db/connect-db.js';
// *** end-points ***
// *** end-points ***
// test end-point
// @ts-ignore
app.get('/', (req, res) => {
  res.status(200).send('API Is Live - welcome to the Deeco API server');
});
// user end-points - all routed
app.use('/api/v1/auth', authRouter);
// hello world
const port = process.env.PORT || 5000;
const start = async () => {
  const decodeDB_URI = process.env.DB_URI;
  try {
    const dbConnection = await dbConnector(decodeDB_URI);
    console.log(`Connected to: ${dbConnection?.connection.host} \nDatabase connected successfully \n..................................`);
    // console.log(process.env.JWT_SECRET);
    app.listen(port, () => console.log(`Server is listening on port ${port}.`));
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
// serve
start();
