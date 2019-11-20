import { Router } from 'express';
import messageRouter from './message';
import tokenRouter from './token';

const v1Router = Router();
v1Router.use('/api/v1', messageRouter);
v1Router.use('/api/v1', tokenRouter);

export default v1Router;