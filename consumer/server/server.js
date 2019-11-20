import express from 'express';
import cors from 'cors';
import mongoose  from "mongoose";
import { DATABASE_URI } from "../server/config";
import Consumer from './controllers/Consumer';
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(DATABASE_URI);

const app = express();

const { PORT = 3001 } = process.env;

app.use(cors());

app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(express.json());

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
   next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 3001).json({
    errors: {
      message: err.message
    }
  });
});

app.listen(PORT, () => {
  console.log(`App Listening on port ${PORT}`);
  Consumer.receiveMessage();
});

export default app;
