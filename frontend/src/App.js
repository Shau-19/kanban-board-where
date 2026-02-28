import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Get all tasks from API
const App = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios.get('/api/tasks').then(response => {
      setTasks(response.data);
    });
  }, []);
  // Render tasks
  return (
    <div>
      {tasks.map(task => (
        <div key={task._id}>{task.name}</div>
      ))}
    </div>
  );
};
export default App;