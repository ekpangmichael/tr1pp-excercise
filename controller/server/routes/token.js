import { Router } from 'express';
import Message from '../controllers/Message';

const tokenRouter = Router();

tokenRouter.post('/token', Message.getToken);

export default tokenRouter;
