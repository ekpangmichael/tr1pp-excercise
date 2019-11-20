import amqp from "amqplib";
import uuidv4 from 'uuid/v4';
import redis from 'redis';

const { REDIS_PORT = 6379 } = process.env;
const client = redis.createClient(REDIS_PORT);
/**
 * @class Test
 * @description class will implement controller functionality
 */
class Message{
  /**
   * @memberof message
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */
  static async sendMessage(req, res, next) {
    const data = req.body;
    try {
      const connection = await amqp.connect(process.env.AMQP_URL)
      const channel = await connection.createChannel();
       await channel.assertQueue("jobs");
      channel.sendToQueue("jobs", Buffer.from(JSON.stringify(data)));
      return res.status(200).send("Message sent!");
      
    } catch (error) {
      return next(error);
    }
  }

  static async getToken(req, res, next){
    const { email } = req.body;
    try {
      const userToken =  uuidv4();
      client.setex(userToken, 3600, email);
      return res.status(200).send(userToken);

    }catch (error) {
      return next(error);
    }

  }
}

export default Message;