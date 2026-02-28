const { MongoClient } = require('mongodb');
const tensorflow = require('@tensorflow/tfjs');
// Connect to MongoDB
const client = new MongoClient('mongodb://localhost:27017');
const db = client.db();
const tasksCollection = db.collection('tasks');
// Get all tasks
async function getTasks() {
  const tasks = await tasksCollection.find().toArray();
  return tasks;
}
// Update task priority
async function updateTaskPriority(id, priority) {
  await tasksCollection.updateOne({ _id: id }, { $set: { priority: priority } });
}
module.exports = { getTasks, updateTaskPriority };