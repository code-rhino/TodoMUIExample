import './App.css';
import { useState } from 'react';
import { 
  Card, 
  TextField, 
  Button, 
  List, 
  ListItem, 
  ListItemText, 
  Checkbox 
} from '@mui/material';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const toggleCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  const addTask=(e)=> {
    e.preventDefault();
    if(!newTask.trim()) return;
    setTasks([...tasks, {text:newTask, completed:false}]);
    setNewTask("");
  }

  return (
    <div className='container'>
     <Card style={{width:'400px', padding:'20px'}}>
      <h1>My To-do List</h1>
      <form onSubmit={addTask}>
        <TextField
          label="Add a new task"
          variant='outlined'
          fullWidth
          value={newTask}
          onChange={(e)=> setNewTask(e.target.value)}
          style={{marginBottom: '20px'}}
        />
        <Button type='submit' variant='contained' color='primary' fullWidth>
          Add Task
        </Button>
      </form>
      <List>
        {tasks.map((task, index)=>(
          <ListItem key={index} onClick={()=> toggleCompletion(index)}>
              <Checkbox
                edge="start"
                checked={task.completed}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText
                primary={task.text}
                style={{textDecoration: task.completed ? 'line-through' : 'none'}}
              />
          </ListItem>
        ))}
      </List>
     </Card>
    </div>
  );
}

export default App;
