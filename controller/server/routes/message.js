import { Router } from 'express';
import Message from '../controllers/Message';
import authToken from '../middlewares/authToken';
import validateFields from '../middlewares/validations';

const messageRouter = Router();

messageRouter.post('/message',  validateFields, authToken, Message.sendMessage);

export default messageRouter;