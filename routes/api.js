const express = require('express');
const router = express.Router();
const coreService = require('../services/core');
// API endpoint to get all tasks
router.get('/tasks', async (req, res) => {
  const tasks = await coreService.getTasks();
  res.json(tasks);
});
// API endpoint to update task priority
router.put('/tasks/:id', async (req, res) => {
  const id = req.params.id;
  const priority = req.body.priority;
  await coreService.updateTaskPriority(id, priority);
  res.json({ message: 'Task priority updated successfully' });
});
module.exports = router;