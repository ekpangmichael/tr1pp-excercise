import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  message: String,
  task_id: String,
  contact_list: Array,
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model("Message", MessageSchema);