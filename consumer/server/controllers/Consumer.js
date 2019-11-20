import amqp from "amqplib";
import Message from "../models/message_model";
/**
 * @class consumer
 * @description class will implement consumer functionality
 */
class Consumer{
  /**
   * @memberof message
   * @param {object} req - Request sent to the route
   * @param {object} res - Response sent from the controller
   * @param {object} next - Error handler
   * @returns {object} - object representing response message
   */
  static async receiveMessage() {
    try {
      const connection = await amqp.connect(process.env.AMQP_URL)
      const channel = await connection.createChannel();
      await channel.assertQueue("jobs");
      
      channel.consume("jobs", message => {
          const {message : msg, task_id, contact_list} = JSON.parse(message.content.toString());
          const messageModel = new Message({ 
            message: msg,
            task_id,
            contact_list
           });
           messageModel.save();

          channel.ack(message);
      })
    } catch (error) {
      throw error;
    }
  }
}

export default Consumer;